import { ApiProperty } from '@nestjs/swagger';

export default class CreateScriptDto {
  @ApiProperty({ description: '名称' })
  Name: string;

  @ApiProperty({ description: '描述' })
  Description: string;

  @ApiProperty({ description: '代码内容' })
  Code: string;
}
