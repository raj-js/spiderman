import { ApiProperty } from '@nestjs/swagger';
import { UpdateFormFieldDto } from './update-form-field.dto';

export class UpdateFormFieldsDto {
  @ApiProperty({
    description: '字段',
    isArray: true,
    type: UpdateFormFieldDto,
  })
  Fields: UpdateFormFieldDto[];
}
