import ApiCodesResolver from './ApiCodesResolver';

export default class LocalizationApiCodesResolver extends ApiCodesResolver {
  Resolve(code: number): string {
    throw new Error('Method not implemented.');
  }
}
