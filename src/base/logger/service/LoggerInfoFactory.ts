import { RootException } from '@base/exception/src/category';
import { ArgumentsHost, Injectable } from '@nestjs/common';

import { BaseLogInfo } from '../type/BaseLogInfo';
import { ErrorLogInfo } from '../type/ErrorLogInfo';
import { RequestLogInfo } from '../type/RequestLogInfo';
import { ResponseLogInfo } from '../type/ResponseLogInfo';
import { LogLevel } from '../type/LogLevel';

@Injectable()
export class LoggerInfoFactory {
  private createBaseInfo(level: LogLevel, host: ArgumentsHost): BaseLogInfo {
    const request = host.switchToHttp().getRequest();

    const info = {
      level,
      user: request.params.user,
      remoteAddr: request.headers?.['x-forwarded-for'] as string,
      userAgent: request.headers?.['user-agent'],
      host: request.headers.host,
      body: request.body,
    } as BaseLogInfo;

    return {
      ...info,
      method: request.method,
      context: request.originalUrl,
    };
  }

  public createErrorInfo(
    rootException: RootException,
    host: ArgumentsHost,
    filter?: string,
  ): ErrorLogInfo {
    const json = rootException.toJSON();
    return {
      ...this.createBaseInfo('error', host),
      ...json,
      filter,
    };
  }

  public createRequestInfo(host: ArgumentsHost): RequestLogInfo {
    return this.createBaseInfo('http', host);
  }

  public createResponseInfo(
    host: ArgumentsHost,
    startTime: any,
    response: any,
  ): ResponseLogInfo {
    return {
      ...this.createBaseInfo('http', host),
      response,
      delay: `${Date.now() - startTime}ms`,
    };
  }
}
