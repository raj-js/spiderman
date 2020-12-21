import { ApiProperty } from '@nestjs/swagger';
import { CreateFormFieldDto } from './create-form-field.dto';

export class CreateFormFieldsDto {
  @ApiProperty({ description: '表单ID' })
  FormId: number;

  @ApiProperty({
    description: '字段',
    isArray: true,
    type: CreateFormFieldDto,
  })
  Fields: CreateFormFieldDto[];
}
