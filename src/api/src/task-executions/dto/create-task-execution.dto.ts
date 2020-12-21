import { ApiProperty } from '@nestjs/swagger';
import { TaskExecution } from 'src/core/entities';
import { CreateTaskExecutionInputDto } from './create-task-execution-input.dto';

export class CreateTaskExecutionDto {
  @ApiProperty({ description: '任务ID' })
  TaskId: number;

  @ApiProperty({
    description: '任务入参',
    isArray: true,
    type: CreateTaskExecutionInputDto,
  })
  Input: CreateTaskExecutionInputDto[];

  @ApiProperty({ description: '任务计划 CRON' })
  Cron: string;

  public ToEntity(): TaskExecution {
    const entity = new TaskExecution();
    entity.TaskId = this.TaskId;
    entity.Cron = this.Cron;
    return entity;
  }
}
