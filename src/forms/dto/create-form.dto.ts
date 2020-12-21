import { ApiProperty } from '@nestjs/swagger';

export class CreateFormDto {
  @ApiProperty({ description: '名称' })
  Name: string;

  @ApiProperty({ description: '描述' })
  Description: string;
}
