import { ApiProperty } from '@nestjs/swagger';
import { UpdateDtoBase } from 'src/core/infrastructure/UpdateDtoBase';

export class UpdateTaskDto extends UpdateDtoBase<number> {
  @ApiProperty({ description: '任务名称' })
  Name: string;

  @ApiProperty({ description: '描述' })
  Description: string;

  @ApiProperty({ description: '脚本ID' })
  ScriptId: number;

  @ApiProperty({ description: '表单ID' })
  FormId: number;

  @ApiProperty({ description: '是否已经删除' })
  IsDeleted: boolean;
}
