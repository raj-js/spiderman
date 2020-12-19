import { CURLServiceBase } from 'src/core/CURLServiceBase';
import { Task } from 'src/core/entities';
import CreateTaskDto from './dto/CreateTaskDto';
import QueryTaskDto from './dto/QueryTaskDto';
import TaskDto from './dto/TaskDto';
import UpdateTaskDto from './dto/UpdateTaskDto';

export default class TaskService extends CURLServiceBase<
  number,
  Task,
  TaskDto,
  QueryTaskDto,
  CreateTaskDto,
  UpdateTaskDto
> {}
