import { ApiProperty } from '@nestjs/swagger';
import {
  FormField,
  TaskExecution,
  TaskExecutionInput,
  TaskExecutionLog,
  TaskExecutionOutput,
} from 'src/core/entities';
import { TaskExecutionStatus } from 'src/core/entities/TaskExecutionStatus';
import TaskExecutionInputDto from './task-execution-input.dto';
import TaskExecutionLogDto from './task-execution-log.dto';
import TaskExecutionOutputDto from './task-execution-output.dto';

export default class TaskExecutionDto {
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

  @ApiProperty({ description: '任务入参' })
  Inputs: TaskExecutionInputDto[];

  @ApiProperty({ description: '任务日志' })
  Logs: TaskExecutionLogDto[];

  @ApiProperty({ description: '任务输出' })
  Output: TaskExecutionOutputDto;

  static From(
    entity: TaskExecution,
    inputs?: { input: TaskExecutionInput; field: FormField }[],
    logs?: TaskExecutionLog[],
    output?: TaskExecutionOutput,
  ): TaskExecutionDto {
    const dto = new TaskExecutionDto();
    dto.Id = entity.Id;
    dto.Cron = entity.Cron;
    dto.ExecuteTime = entity.ExecuteTime;
    dto.TaskId = entity.TaskId;
    dto.Status = entity.Status;

    dto.Inputs = inputs?.map(TaskExecutionInputDto.From);
    dto.Logs = logs?.map(TaskExecutionLogDto.From);
    dto.Output = output ?? TaskExecutionOutputDto.From(output);
    return dto;
  }
}
