import { ApiProperty } from '@nestjs/swagger';
import { FormField, TaskExecutionInput } from 'src/core/entities';

export class TaskExecutionInputDto {
  @ApiProperty({ description: '执行记录ID' })
  ExecutionId: number;

  @ApiProperty({ description: '字段ID' })
  FieldId: number;

  @ApiProperty({ description: '字段名称' })
  FieldName: string;

  @ApiProperty({ description: '字段标签名称' })
  FieldLabel: string;

  @ApiProperty({ description: '字段值' })
  Value: string;

  ToEntity(): TaskExecutionInput {
    const entity = new TaskExecutionInput();
    entity.ExecutionId = this.ExecutionId;
    entity.FieldId = this.FieldId;
    entity.Value = this.Value;
    return entity;
  }

  static From({
    input,
    field,
  }: {
    input: TaskExecutionInput;
    field: FormField;
  }): TaskExecutionInputDto {
    const dto = new TaskExecutionInputDto();
    dto.ExecutionId = input.ExecutionId;
    dto.FieldId = input.FieldId;
    dto.FieldName = field.Name;
    dto.FieldLabel = field.Label;
    dto.Value = input.Value;
    return dto;
  }
}
