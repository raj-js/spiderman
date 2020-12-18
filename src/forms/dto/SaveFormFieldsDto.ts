import { ApiProperty } from '@nestjs/swagger';
import CreateFormFieldDto from './CreateFormFieldDto';

export default class SaveFormFieldsDto {
  @ApiProperty({ description: '表单ID' })
  FormId: number;

  @ApiProperty({
    description: '字段',
    isArray: true,
    type: CreateFormFieldDto,
  })
  Fields: CreateFormFieldDto[];
}
