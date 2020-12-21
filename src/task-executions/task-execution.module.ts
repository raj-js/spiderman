import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  FormField,
  TaskExecution,
  TaskExecutionInput,
  TaskExecutionLog,
  TaskExecutionOutput,
} from 'src/core/entities';
import { TaskExecutionController } from './task-execution.controller';
import { TaskExecutionService } from './task-execution.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TaskExecution,
      TaskExecutionInput,
      TaskExecutionOutput,
      TaskExecutionLog,
      FormField,
    ]),
  ],
  providers: [TaskExecutionService],
  controllers: [TaskExecutionController],
  exports: [TypeOrmModule],
})
export class TaskExecutionModule {}
