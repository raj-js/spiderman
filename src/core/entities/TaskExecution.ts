import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class TaskExecution {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  TaskId: number;
  @Column()
  ExecuteTime: Date;
  @Column({ length: 32 })
  Cron: string;
  @Column()
  Status: 'Ready' | 'Running' | 'Error' | 'Stopped';
}
