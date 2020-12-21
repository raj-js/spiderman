import { LogLevel } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { TaskExecutionLog } from 'src/core/entities';

export class TaskExecutionLogDto {
  @ApiProperty({ description: '执行记录ID' })
  ExecutionId: number;

  @ApiProperty({ description: '日志等级' })
  Level: LogLevel;

  @ApiProperty({ description: '日志内容' })
  Content: string;

  @ApiProperty({ description: '创建时间' })
  CreateTime: Date;

  static From(entity: TaskExecutionLog): TaskExecutionLogDto {
    const dto = new TaskExecutionLogDto();
    dto.ExecutionId = entity.ExecutionId;
    dto.Level = entity.Level;
    dto.Content = entity.Content;
    dto.CreateTime = entity.CreateTime;
    return dto;
  }
}
