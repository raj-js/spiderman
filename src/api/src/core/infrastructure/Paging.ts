import { ApiProperty } from '@nestjs/swagger';

export class Pager<TEntity> {
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

export class Paged<T> {
  @ApiProperty({ description: '数据' })
  Data: T[];

  @ApiProperty({ description: '总数' })
  Total: number;

  public static From<T>([Data, Count]: [T[], number]): Paged<T> {
    return {
      Data: Data,
      Total: Count,
    };
  }
}
