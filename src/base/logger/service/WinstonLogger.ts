import { ArgumentsHost, Global, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { LoggerService } from './LoggerService';
import { LoggerInfoFactory } from './LoggerInfoFactory';
import { RootException } from '@base/exception/src/category';

@Injectable()
export class WinstonLogger implements LoggerService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly infoFactory: LoggerInfoFactory,
  ) {}

  // TODO 외부라이브러리(mysql용) 에러 로그 추가

  error(exception: RootException, host: ArgumentsHost, filter?: string) {
    if (!this.logger.isErrorEnabled()) {
      return null;
    }

    const info = this.infoFactory.createErrorInfo(exception, host, filter);
    this.logger.error(
      `${info.code} ${exception.message} from ${info.remoteAddr}`,
      info,
    );
  }

  simpleError(message: string, context: string, data: any) {
    if (!this.logger.isErrorEnabled()) {
      return null;
    }
    this.logger.error(message, { context, ...(data || {}) });
  }

  warn(message: any, ...optionalParams: any[]) {
    return this.logger.warn(message, ...optionalParams);
  }
  log(message: any, data: any) {
    return this.logger.http(message, data);
  }

  http(
    message: 'REQUEST' | 'RESPONSE',
    host: ArgumentsHost,
    startTime?: number,
    response?: any,
  ) {
    if (!this.logger.isLevelEnabled('http')) {
      return null;
    }
    let info;
    if (message === 'REQUEST') {
      info = this.infoFactory.createRequestInfo(host);
    } else {
      info = this.infoFactory.createResponseInfo(host, startTime, response);

      return this.logger.http(`from ${info.remoteAddr}`, info);
    }
  }

  verbose?(message: any, ...optionalParams: any[]) {
    return this.logger.verbose(message, ...optionalParams);
  }

  debug?(message: any, ...optionalParams: any[]) {
    return this.logger.debug(message, ...optionalParams);
  }
}
