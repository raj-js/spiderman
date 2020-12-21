import { ApiCodesResolver } from './ApiCodesResolver';

export class LocalizationApiCodesResolver extends ApiCodesResolver {
  Resolve(code: number): string {
    throw new Error('Method not implemented.');
  }
}
