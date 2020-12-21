import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskExecutionStatus } from './TaskExecutionStatus';

@Entity()
export class TaskExecution {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  TaskId: number;
  @Column()
  ExecuteTime: Date;
  @Column({ length: 32 })
  Cron: string;
  @Column()
  Status: TaskExecutionStatus;
}
