import { Repository } from 'typeorm';
import Paged from './infrastructure/Paged';
import Pager from './infrastructure/Pager';

export default abstract class CurlServiceBase<
  TEntityKey,
  TEntity,
  TOutput,
  TQueryInput extends Pager<TEntity> & { Where: any; Select: any },
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
