import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    length: 50,
  })
  Name: string;

  @Column({
    length: 2048,
  })
  Description: string;

  @Column()
  ScriptId: number;

  @Column()
  FormId: number;

  @Column()
  IsDeleted: boolean;
}
