import { ApiProperty } from '@nestjs/swagger';
import { TaskExecutionStatus } from 'src/core/entities/TaskExecutionStatus';
import UpdateDtoBase from 'src/core/infrastructure/UpdateDtoBase';

export default class UpdateTaskExecutionDto extends UpdateDtoBase<number> {
  @ApiProperty({ description: '执行记录ID' })
  Id: number;

  @ApiProperty({ description: '任务ID' })
  TaskId: number;

  @ApiProperty({ description: '执行时间' })
  ExecuteTime: Date | null;

  @ApiProperty({ description: '任务计划 CRON' })
  Cron: string;

  @ApiProperty({ description: '任务执行状态' })
  Status: TaskExecutionStatus;
}
