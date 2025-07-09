import { RootException } from '@base/exception/src/category';
import { ArgumentsHost, LoggerService as ILoggerService } from '@nestjs/common';

export interface LoggerService extends ILoggerService {
  log(message: string, data?: any);
  error(exception: RootException, host: ArgumentsHost, filter?: string);
  http(
    type: 'REQUEST' | 'RESPONSE',
    host: ArgumentsHost,
    startTime?: number,
    reponse?: any,
  );
  simpleError(message: string, context: string, data?: any);
}
