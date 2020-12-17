import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class TaskExecutionInput {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  ExecutionId: number;
  @Column()
  FieldId: number;
  @Column('text')
  Value: string;
}
