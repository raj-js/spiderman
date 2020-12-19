import { ApiProperty } from '@nestjs/swagger';
import { TaskExecution } from 'src/core/entities';
import { TaskExecutionStatus } from 'src/core/entities/TaskExecutionStatus';
import QueryDtoBase from 'src/core/infrastructure/QueryDtoBase';

export default class QueryTaskExecutionDto extends QueryDtoBase<TaskExecution> {
  @ApiProperty({ description: '任务ID', required: false })
  TaskId: number | null;

  @ApiProperty({ description: '任务状态', required: false })
  Status: TaskExecutionStatus | null;
}
