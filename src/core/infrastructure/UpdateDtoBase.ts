import { ApiProperty } from '@nestjs/swagger';

export class UpdateDtoBase<TKey> {
  @ApiProperty({ description: '实体ID' })
  Id: TKey;
}
