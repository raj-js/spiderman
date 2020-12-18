import { Repository, getConnection, getManager } from 'typeorm';
import { Pager, Paged } from './infrastructure/Paging';

export abstract class CURServiceBase<
  TEntityKey,
  TEntity,
  TOutput,
  TCreateInput,
  TUpdateInput extends { Id: TEntityKey }
> {
  constructor(protected readonly repository: Repository<TEntity>) {}

  async Get(id: TEntityKey): Promise<TOutput> {
    let entity = await this.repository.findOne(id);
    let dto = {} as TOutput;
    return Object.assign(dto, entity);
  }
  async Create(reqDto: TCreateInput): Promise<TOutput> {
    let entity = {} as TEntity;
    Object.assign(entity, reqDto);
    entity = await this.repository.save(entity, { reload: true });
    let dto = {} as TOutput;
    return Object.assign(dto, entity);
  }
  async CreateOrUpdateMultiple(reqDtos: TCreateInput[]): Promise<TOutput[]> {
    let entities = reqDtos.map((v) => Object.assign({} as TEntity, v));
    entities = await this.repository.save(entities, {
      reload: true,
      transaction: true,
    });
    return entities.map((v) => Object.assign({} as TOutput, v));
  }
  async Delete(id: TEntityKey, soft: boolean = false): Promise<boolean> {
    if (soft) {
      const entity = await this.Get(id);
      if ('IsDeleted' in entity) {
        entity['IsDeleted'] = true;
        const result = await this.repository.update(id, entity);
        return result.affected > 0;
      } else {
        throw new Error(`对象 ${entity} 无法被软删除`);
      }
    }
    const result = await this.repository.delete(id);
    return result.affected > 0;
  }
  async Update(reqDto: TUpdateInput): Promise<boolean> {
    let entity = {} as TEntity;
    Object.assign(entity, reqDto);
    const result = await this.repository.update(reqDto.Id, entity);
    return result.affected > 0;
  }
}

export abstract class CURLServiceBase<
  TEntityKey,
  TEntity,
  TOutput,
  TQueryInput extends Pager<TEntity> & { Where: any; Select: any },
  TCreateInput,
  TUpdateInput extends { Id: TEntityKey }
> extends CURServiceBase<
  TEntityKey,
  TEntity,
  TOutput,
  TCreateInput,
  TUpdateInput
> {
  constructor(protected readonly repository: Repository<TEntity>) {
    super(repository);
  }

  async Paging(query: TQueryInput): Promise<Paged<TOutput>> {
    const [rows, count] = await this.repository.findAndCount({
      order: query.Order,
      skip: query.Skip,
      take: query.Take,
      where: query.Where,
      select: query.Select,
    });

    let dto = {} as TOutput;
    const dtos = rows.map((v, _, __) => Object.assign(dto, v));
    return Paged.From([dtos, count]);
  }
}
