import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ApiCodesResolver {
  abstract Resolve(code: number): string;
}
