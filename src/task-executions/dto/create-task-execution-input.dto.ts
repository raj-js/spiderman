import { ApiProperty } from '@nestjs/swagger';
import { TaskExecutionInput } from 'src/core/entities';

export default class CreateTaskExecutionInputDto {
  @ApiProperty({ description: '字段ID' })
  FieldId: number;

  @ApiProperty({ description: '值' })
  Value: string;

  ToEntity(executionId: number): TaskExecutionInput {
    const entity = new TaskExecutionInput();
    entity.ExecutionId = executionId;
    entity.FieldId = this.FieldId;
    entity.Value = this.Value;
    return entity;
  }
}
