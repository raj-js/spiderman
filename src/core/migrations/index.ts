import { env } from 'process';
import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import '../entities';
import {
  Form,
  FormField,
  Script,
  Task,
  TaskExecution,
  TaskExecutionInput,
  TaskExecutionLog,
  TaskExecutionOutput,
} from '../entities';

export async function migrate(): Promise<Connection> {
  return await createConnection({
    type: 'mysql',
    host: env.DATABASE_HOST,
    port: Number(env.DATABASE_PORT),
    username: env.DATABASE_USER,
    password: env.DATABASE_PWD,
    database: env.DATABASE_NAME,
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
    synchronize: env.DATABASE_SYNC == 'true',
    logging: true,
  });
}

migrate().then((connection) => connection.getRepository);
