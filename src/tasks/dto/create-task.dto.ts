import { ApiProperty } from '@nestjs/swagger';

export default class CreateTaskDto {
  @ApiProperty({ description: '任务名称' })
  Name: string;

  @ApiProperty({ description: '描述' })
  Description: string;

  @ApiProperty({ description: '脚本ID' })
  ScriptId: number;

  @ApiProperty({ description: '表单ID' })
  FormId: number;
}
