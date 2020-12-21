import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    length: 50,
  })
  Name: string;

  @Column({
    length: 1024,
  })
  Description: string;

  @Column()
  IsDeleted: boolean;
}
