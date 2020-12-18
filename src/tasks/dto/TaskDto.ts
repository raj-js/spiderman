import { ApiProperty } from '@nestjs/swagger';

export default class TaskDto {
  @ApiProperty({ description: '任务ID' })
  Id: number;

  @ApiProperty({ description: '任务名称' })
  Name: string;

  @ApiProperty({ description: '描述' })
  Description: string;

  @ApiProperty({ description: '脚本ID' })
  ScriptId: number;

  @ApiProperty({ description: '脚本名称' })
  ScriptName: string;

  @ApiProperty({ description: '表单ID' })
  FormId: number;

  @ApiProperty({ description: '表单名称' })
  FormName: string;

  @ApiProperty({ description: '是否已经删除' })
  IsDeleted: boolean;
}
