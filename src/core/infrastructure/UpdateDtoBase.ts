import { ApiProperty } from '@nestjs/swagger';

export default class UpdateDtoBase<TKey> {
  @ApiProperty({ description: '实体ID' })
  Id: TKey;
}
