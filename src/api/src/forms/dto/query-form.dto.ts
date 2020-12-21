import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Form, Script } from 'src/core/entities';
import { Pager } from 'src/core/infrastructure/Paging';

export class QueryFormDto extends Pager<Form> {
  constructor() {
    super();
    this.Order = {
      Id: 'ASC',
    };
  }

  @ApiHideProperty()
  Where: {};

  @ApiHideProperty()
  readonly Select: (keyof Form)[] = ['Id', 'Name', 'Description', 'IsDeleted'];

  @ApiProperty({ description: '是否已经删除', required: false })
  IsDeleted: boolean | null;

  @ApiProperty({ description: '表单名称', required: false })
  Name: string | null;
}
