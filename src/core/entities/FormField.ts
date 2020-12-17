import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class FormField {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  FormId: number;

  @Column({
    length: 50,
  })
  Label: string;

  @Column()
  Type: 'Number' | 'String' | 'Date' | 'Time' | 'DateTime';

  @Column()
  IsRequired: boolean;

  @Column({
    length: 1024,
  })
  Description: string;
}
