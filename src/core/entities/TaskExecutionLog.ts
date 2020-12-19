import { LogLevel } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class TaskExecutionLog {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  ExecutionId: number;
  @Column()
  Level: LogLevel;
  @Column('text')
  Content: string;
  @Column()
  CreateTime: Date;
}
