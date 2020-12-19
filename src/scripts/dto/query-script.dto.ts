import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Script } from 'src/core/entities';
import { Pager } from 'src/core/infrastructure/Paging';

export default class QueryScriptDto extends Pager<Script> {
  constructor() {
    super();
    this.Order = {
      Id: 'ASC',
    };
  }

  @ApiHideProperty()
  Where: {};

  @ApiHideProperty()
  readonly Select: (keyof Script)[] = [
    'Id',
    'Name',
    'Description',
    'Code',
    'IsDeleted',
  ];

  @ApiProperty({ description: '是否已经删除', required: false })
  IsDeleted: boolean | null;

  @ApiProperty({ description: '脚本名称', required: false })
  Name: string | null;
}
