import { ApiProperty } from '@nestjs/swagger';
import { CODES } from './Codes';

export class ApiResponse<T> {
  @ApiProperty({ description: '响应编码' })
  Code: number;

  @ApiProperty({ description: '响应消息' })
  Message: string;

  @ApiProperty({ description: '操作是否成功' })
  IsSuccess: boolean;

  @ApiProperty({ description: '响应数据' })
  Data: T;
}

export function Success<T>(data: T): ApiResponse<T> {
  return {
    Code: CODES.SUCCESS,
    Message: '',
    IsSuccess: true,
    Data: data,
  };
}

export function Error(options: {
  code: number;
  msg: string;
}): ApiResponse<null> {
  return {
    Code: options.code,
    Message: options.msg,
    IsSuccess: false,
    Data: null,
  };
}

export function NotFound(): ApiResponse<null> {
  return {
    Code: CODES.ERROR_RESOURCE_NOT_FOUND,
    Message: '资源未找到',
    IsSuccess: false,
    Data: null,
  };
}

export function SuccessOrFailed(options: {
  arg: boolean;
  code?: number;
  msg?: string;
}): ApiResponse<null> {
  return {
    Code: options.code ?? (options.arg ? CODES.SUCCESS : CODES.ERROR_UNKNOW),
    Message: options.msg ?? (options.arg ? '操作成功' : '操作失败'),
    IsSuccess: options.arg,
    Data: null,
  };
}

export function SuccessOrNotFound<T>(data: T): ApiResponse<T> {
  return data ? Success(data) : NotFound();
}
