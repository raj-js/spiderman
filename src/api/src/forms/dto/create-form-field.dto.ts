import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { FormFieldType } from 'src/core/entities/FormFieldType';

export class CreateFormFieldDto {
  @ApiHideProperty()
  FormId: number;

  @ApiProperty({ description: '字段名称' })
  Name: string;

  @ApiProperty({ description: '标签名称' })
  Label: string;

  @ApiProperty({ description: '字段类型', enum: FormFieldType })
  Type: FormFieldType;

  @ApiProperty({ description: '是否必填' })
  IsRequired: boolean;

  @ApiProperty({ description: '描述' })
  Description: string;
}
