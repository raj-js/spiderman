import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { FormFieldType } from '../infrastructure/FormFieldType';

@Entity()
export default class FormField {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  FormId: number;

  // 字段名
  @Column({
    length: 50,
  })
  Name: string;

  // 标签名
  @Column({
    length: 50,
  })
  Label: string;

  @Column()
  Type: FormFieldType;

  @Column()
  IsRequired: boolean;

  @Column({
    length: 1024,
  })
  Description: string;
}
