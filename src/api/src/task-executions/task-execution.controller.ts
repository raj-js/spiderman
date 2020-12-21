import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
import { CreateTaskExecutionDto } from './dto/create-task-execution.dto';
import { QueryTaskExecutionDto } from './dto/query-task-execution.dto';
import { TaskExecutionInputDto } from './dto/task-execution-input.dto';
import { TaskExecutionLogDto } from './dto/task-execution-log.dto';
import { TaskExecutionOutputDto } from './dto/task-execution-output.dto';
import { TaskExecutionDto } from './dto/task-execution.dto';
import { TaskExecutionService } from './task-execution.service';

@ApiTags('执行任务')
@Controller('execution')
export class TaskExecutionController {
  constructor(private executionService: TaskExecutionService) {}

  @ApiOperation({ summary: '创建执行任务' })
  @ApiOkResponse({ type: ApiResponse })
  @Post()
  async Create(
    @Body() reqDto: CreateTaskExecutionDto,
  ): Promise<ApiResponse<TaskExecutionDto>> {
    return Success(await this.executionService.Create(reqDto));
  }

  @ApiOperation({ summary: '通过ID获取执行任务' })
  @ApiParam({ name: 'executionId', description: '执行任务ID' })
  @ApiOkResponse({ type: ApiResponse })
  @Get(':executionId')
  async Get(
    @Param('executionId') executionId: number,
  ): Promise<ApiResponse<TaskExecutionDto>> {
    return SuccessOrNotFound(await this.executionService.Get(executionId));
  }

  @ApiOperation({ summary: '分页查询执行任务' })
  @Get()
  async Paging(
    @Query() reqDto: QueryTaskExecutionDto,
  ): Promise<ApiResponse<Paged<TaskExecutionDto>>> {
    if (reqDto.Take < 0 || reqDto.Take > 1000) reqDto.Take = 10;
    if (reqDto.TaskId) reqDto.Where['TaskId'] = Equal(reqDto.TaskId);
    if (reqDto.Status) reqDto.Where['Status'] = Equal(reqDto.Status);

    return Success(await this.executionService.Paging(reqDto));
  }

  @ApiOperation({ summary: '通过ID获取执行任务的输入' })
  @ApiParam({ name: 'executionId', description: '执行任务ID' })
  @ApiOkResponse({ type: ApiResponse })
  @Get('inputs/:executionId')
  async GetInputs(
    @Param('executionId') executionId: number,
  ): Promise<ApiResponse<TaskExecutionInputDto[]>> {
    return Success(await this.executionService.GetInputs(executionId));
  }

  @ApiOperation({ summary: '通过ID获取执行任务的日志' })
  @ApiParam({ name: 'executionId', description: '执行任务ID' })
  @ApiOkResponse({ type: ApiResponse })
  @Get('logs/:executionId')
  async GetLogs(
    @Param('executionId') executionId: number,
  ): Promise<ApiResponse<TaskExecutionLogDto[]>> {
    return Success(await this.executionService.GetLogs(executionId));
  }

  @ApiOperation({ summary: '通过ID获取执行任务的输出' })
  @ApiParam({ name: 'executionId', description: '执行任务ID' })
  @ApiOkResponse({ type: ApiResponse })
  @Get('output/:executionId')
  async GetOutput(
    @Param('executionId') executionId: number,
  ): Promise<ApiResponse<TaskExecutionOutputDto>> {
    return Success(await this.executionService.GetOutput(executionId));
  }
}
