import { ApiProperty } from '@nestjs/swagger';

export default class UpdateScriptDto {
  @ApiProperty({ description: 'ID' })
  Id: number;

  @ApiProperty({ description: '名称' })
  Name: string;

  @ApiProperty({ description: '描述' })
  Description: string;

  @ApiProperty({ description: '代码内容' })
  Code: string;

  @ApiProperty({ description: '是否已经删除' })
  IsDeleted: boolean;
}
