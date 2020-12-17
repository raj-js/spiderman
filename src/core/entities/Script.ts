import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Script {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    length: 50,
  })
  Name: string;

  @Column({
    type: 'text',
    charset: 'utf8mb4',
  })
  Description: string;

  @Column({
    type: 'text',
    charset: 'utf8mb4',
  })
  Code: string;

  @Column()
  IsDeleted: boolean;
}
