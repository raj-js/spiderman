import { ApiHideProperty } from '@nestjs/swagger';
import { Pager } from './Paging';

export default class QueryDtoBase<TEntity> extends Pager<TEntity> {
  @ApiHideProperty()
  Where: {};

  @ApiHideProperty()
  Select: (keyof TEntity)[];
}
