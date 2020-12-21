import { ApiProperty } from '@nestjs/swagger';
import { Task } from 'src/core/entities';
import { QueryDtoBase } from 'src/core/infrastructure/QueryDtoBase';

export class QueryTaskDto extends QueryDtoBase<Task> {
  @ApiProperty({ description: '是否已经删除', required: false })
  IsDeleted: boolean | null;

  @ApiProperty({ description: '任务名称', required: false })
  Name: string | null;
}
