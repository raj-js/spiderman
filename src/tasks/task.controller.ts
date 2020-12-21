import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import {
  ApiResponse,
  Success,
  SuccessOrFailed,
  SuccessOrNotFound,
} from 'src/core/infrastructure/ApiResponse';
import { Paged } from 'src/core/infrastructure/Paging';
import { Like, Equal } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { QueryTaskDto } from './dto/query-task.dto';
import { TaskDto } from './dto/task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@ApiTags('任务')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: '创建任务' })
  @ApiOkResponse({ type: ApiResponse })
  @Post()
  async Create(@Body() reqDto: CreateTaskDto): Promise<ApiResponse<TaskDto>> {
    return Success(await this.taskService.Create(reqDto));
  }

  @ApiOperation({ summary: '删除任务' })
  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<ApiResponse<boolean>> {
    return SuccessOrFailed({
      arg: await this.taskService.Delete(id, true),
    });
  }

  @ApiOperation({ summary: '修改任务' })
  @Put()
  async Update(@Body() reqDto: UpdateTaskDto): Promise<ApiResponse<boolean>> {
    return SuccessOrFailed({
      arg: await this.taskService.Update(reqDto),
    });
  }

  @ApiOperation({ summary: '通过ID获取任务' })
  @ApiParam({ name: 'id', description: '任务ID' })
  @ApiOkResponse({ type: ApiResponse })
  @Get(':id')
  async Get(@Param('id') id: number): Promise<ApiResponse<TaskDto>> {
    return SuccessOrNotFound(await this.taskService.Get(id));
  }

  @ApiOperation({ summary: '分页查询任务数据' })
  @Get()
  async Paging(
    @Query() reqDto: QueryTaskDto,
  ): Promise<ApiResponse<Paged<TaskDto>>> {
    if (reqDto.Take < 0 || reqDto.Take > 1000) reqDto.Take = 10;
    if (reqDto.Name) reqDto.Where['Name'] = Like(`%${reqDto.Name}%`);
    if (reqDto.IsDeleted) reqDto.Where['IsDeleted'] = Equal(reqDto.IsDeleted);

    return Success(await this.taskService.Paging(reqDto));
  }
}
