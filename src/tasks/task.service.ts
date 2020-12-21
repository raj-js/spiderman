import { CURLServiceBase } from 'src/core/CURLServiceBase';
import { Task } from 'src/core/entities';
import { CreateTaskDto } from './dto/create-task.dto';
import { QueryTaskDto } from './dto/query-task.dto';
import { TaskDto } from './dto/task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export class TaskService extends CURLServiceBase<
  number,
  Task,
  TaskDto,
  QueryTaskDto,
  CreateTaskDto,
  UpdateTaskDto
> {}
