import { ApiProperty } from '@nestjs/swagger';
import { TaskExecutionOutput } from 'src/core/entities';

export default class TaskExecutionOutputDto {
  @ApiProperty({ description: '执行记录ID' })
  ExecutionId: number;
  @ApiProperty({ description: '内容MIME类型' })
  ContentType: string;
  @ApiProperty({ description: '内容' })
  Content: string;
  @ApiProperty({ description: '创建时间' })
  CreateTime: Date;

  static From(entity: TaskExecutionOutput): TaskExecutionOutputDto {
    const dto = new TaskExecutionOutputDto();
    dto.ExecutionId = entity.ExecutionId;
    dto.ContentType = entity.ContentType;
    dto.Content = entity.Content;
    dto.CreateTime = entity.CreateTime;
    return dto;
  }
}
