import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Form,
  FormField,
  Script,
  Task,
  TaskExecution,
  TaskExecutionInput,
  TaskExecutionLog,
  TaskExecutionOutput,
} from './core/entities';

export const ormModule: DynamicModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '192.168.252.222',
  port: 30001,
  username: 'root',
  password: 'f7526697',
  database: 'spiderman',
  entities: [
    Form,
    FormField,
    Script,
    Task,
    TaskExecution,
    TaskExecutionInput,
    TaskExecutionLog,
    TaskExecutionOutput,
  ],
  synchronize: false,
  logging: true,
});
