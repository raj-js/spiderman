import { Injectable } from '@nestjs/common';

@Injectable()
export default abstract class ApiCodesResolver {
  abstract Resolve(code: number): string;
}
