import {
  FormField,
  TaskExecution,
  TaskExecutionInput,
  TaskExecutionLog,
  TaskExecutionOutput,
} from 'src/core/entities';
import { getManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskExecutionStatus } from 'src/core/entities/TaskExecutionStatus';
import { CURLServiceBase } from 'src/core/CURLServiceBase';
import { Injectable } from '@nestjs/common';
import { CreateTaskExecutionDto } from './dto/create-task-execution.dto';
import { QueryTaskExecutionDto } from './dto/query-task-execution.dto';
import { TaskExecutionInputDto } from './dto/task-execution-input.dto';
import { TaskExecutionLogDto } from './dto/task-execution-log.dto';
import { TaskExecutionOutputDto } from './dto/task-execution-output.dto';
import { TaskExecutionDto } from './dto/task-execution.dto';
import { UpdateTaskExecutionDto } from './dto/update-task-execution.dto';

@Injectable()
export class TaskExecutionService extends CURLServiceBase<
  number,
  TaskExecution,
  TaskExecutionDto,
  QueryTaskExecutionDto,
  CreateTaskExecutionDto,
  UpdateTaskExecutionDto
> {
  constructor(
    @InjectRepository(TaskExecution)
    protected repository: Repository<TaskExecution>,
    @InjectRepository(TaskExecutionInput)
    private taskExecutionInputRepository: Repository<TaskExecutionInput>,
    @InjectRepository(TaskExecutionLog)
    private taskExecutionLogRepository: Repository<TaskExecutionLog>,
    @InjectRepository(TaskExecutionOutput)
    private taskExecutionOutputRepository: Repository<TaskExecutionOutput>,
    @InjectRepository(FormField)
    private formFieldRepository: Repository<FormField>,
  ) {
    super(repository);
  }

  async Create(reqDto: CreateTaskExecutionDto): Promise<TaskExecutionDto> {
    return await getManager().transaction(async (manager) => {
      const execution = reqDto.ToEntity();
      execution.Status = TaskExecutionStatus.Ready;
      await manager.save(execution, { reload: true });

      const inputs = reqDto.Input.map((v) => v.ToEntity(execution.Id));
      await manager.save(inputs, { reload: true });

      const fieldIds = inputs.map((v) => v.FieldId);
      const fields = await this.formFieldRepository.findByIds(fieldIds);

      return TaskExecutionDto.From(
        execution,
        inputs.map((input) => {
          const field = fields.find((v) => v.Id == input.FieldId);
          return { input, field };
        }),
      );
    });
  }

  async Get(executionId: number): Promise<TaskExecutionDto> {
    const entity = await super.Get(executionId);
    return TaskExecutionDto.From(entity);
  }

  async GetInputs(executionId: number): Promise<TaskExecutionInputDto[]> {
    const inputs = await this.taskExecutionInputRepository.find({
      ExecutionId: executionId,
    });
    const fieldIds = inputs.map((v) => v.FieldId);
    const fields = await this.formFieldRepository.findByIds(fieldIds);
    return inputs.map((input) => {
      const field = fields.find((v) => v.Id == input.FieldId);
      return TaskExecutionInputDto.From({ input, field });
    });
  }

  async GetOutput(executionId: number): Promise<TaskExecutionOutputDto> {
    const output = await this.taskExecutionOutputRepository.findOne({
      ExecutionId: executionId,
    });
    return TaskExecutionOutputDto.From(output);
  }

  async GetLogs(executionId: number): Promise<TaskExecutionLogDto[]> {
    const logs = await this.taskExecutionLogRepository.find({
      ExecutionId: executionId,
    });
    return logs.map(TaskExecutionLogDto.From);
  }

  //#region 私有方法

  //#endregion
}
