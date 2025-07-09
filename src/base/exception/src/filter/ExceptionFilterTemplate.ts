import { ArgumentsHost } from '@nestjs/common';

import { RootException } from '../category';
import { ErrorHandler } from '../service/ErrorHandler';
import { ExceptionMessageResolver } from '../service/ExceptionMessageResolver';
import { LoggerService } from '@base/logger/service/LoggerService';
import { InjectLogger } from '@base/BaseInject';

export abstract class ExceptionFilterTemplate<T extends Error> {
  constructor(
    @InjectLogger() private readonly logger: LoggerService,
    private readonly errorHandler: ErrorHandler,
    private readonly exceptionMessageResolver: ExceptionMessageResolver,
  ) {}

  abstract mapToRootException(exception: T): RootException;

  public catch(exception: T, host: ArgumentsHost) {
    const rootException = this.mapToRootException(exception);
    this.syncStackWithCause(rootException);
    this.exceptionMessageResolver.resolve(rootException);
    this.logger.error(rootException, host, this.constructor.name);
    return this.errorHandler.handle(host, rootException);
  }

  /**
   * ErrorFilter, HttpExceptionFilter에서는 예외번역을 위해 catch한 exception을 새로 만든 `RootException`의 cause에 넣어줍니다.
   * 이렇게 될 경우, 새로 만들어진 `RootException.stack`은 항상 "HttpExceptionFilter(or)ErrorFilter"로 잡히게 되기 때문에, 쓸모가 없는 정보가 되버립니다.
   * 이런 쓸모없는 정보를 없애고, catch된 exception의 stack을 넣기 위한 메소드입니다.
   */
  private syncStackWithCause(rootException: RootException) {
    const { cause } = rootException;
    if (cause) {
      rootException.stack = cause.stack;
    }
  }
}
