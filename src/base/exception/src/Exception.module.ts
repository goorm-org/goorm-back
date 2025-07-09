import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { ErrorHandler } from './service/ErrorHandler';
import { ErrorFilter } from './filter/ErrorFilter';
import { HttpExceptionFilter } from './filter/HttpExceptionFilter';
import { RootExceptionFilter } from './filter/RootExceptionFilter';
import { ExceptionMessageResolver } from './service/ExceptionMessageResolver';

@Module({
  providers: [
    // APP_FILTER 순서 바꾸지 말 것. 바꾸면 모든 에러를 ErrorFiler에서 받을 수가 있음
    { provide: APP_FILTER, useClass: ErrorFilter },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_FILTER, useClass: RootExceptionFilter },
    ErrorHandler,
    ExceptionMessageResolver,
  ],
})
export class ExceptionModule {}
