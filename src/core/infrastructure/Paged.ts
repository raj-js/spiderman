import { ApiProperty } from '@nestjs/swagger';

export default class Paged<T> {
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
