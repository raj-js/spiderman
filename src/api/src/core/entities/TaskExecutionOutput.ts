import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskExecutionOutput {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  ExecutionId: number;
  @Column({ length: 32 })
  ContentType: string;
  @Column('text')
  Content: string;
  @Column()
  CreateTime: Date;
}
