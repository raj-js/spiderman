import { ApiProperty } from '@nestjs/swagger';

export class FormDto {
  @ApiProperty({ description: '表单ID' })
  Id: number;

  @ApiProperty({ description: '名称' })
  Name: string;

  @ApiProperty({ description: '描述' })
  Description: string;

  @ApiProperty({ description: '是否已经删除' })
  IsDeleted: boolean;
}
