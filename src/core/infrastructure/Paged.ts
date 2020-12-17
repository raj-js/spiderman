import { ApiProperty } from '@nestjs/swagger';

export default class Paged<T> {
  @ApiProperty({ description: '数据' })
  Data: T[];

  @ApiProperty({ description: '总数' })
  Total: number;

  public static From<T>(args: [T[], number]): Paged<T> {
    return {
      Data: args[0],
      Total: args[1],
    };
  }
}
