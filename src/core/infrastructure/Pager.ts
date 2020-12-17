import { ApiProperty } from '@nestjs/swagger';

export default class Pager<TEntity> {
  @ApiProperty({ description: '跳过前多少条' })
  Skip: number;

  @ApiProperty({ description: '取多少条' })
  Take: number;

  @ApiProperty({
    name: 'Order',
    description: '排序',
    example: '{ "Id": "ASC" }',
  })
  Order: {
    [P in keyof TEntity]?: 'ASC' | 'DESC';
  };
}
