import { HttpStatus } from '@nestjs/common';

import { ExceptionCode } from '../enum';

export class ExceptionHelper {
  public static translateCodeToHttpStatusCode(exceptionCode: ExceptionCode): number {
    switch (exceptionCode) {
      case ExceptionCode.BAD_REQUEST:
        return HttpStatus.BAD_REQUEST;
      case ExceptionCode.FORBIDDEN:
        return HttpStatus.FORBIDDEN;
      case ExceptionCode.NOT_ALLOWED:
        return HttpStatus.METHOD_NOT_ALLOWED;
      case ExceptionCode.NOT_FOUND:
        return HttpStatus.NOT_FOUND;
      case ExceptionCode.TIME_OUT:
        return HttpStatus.REQUEST_TIMEOUT;
      case ExceptionCode.TOO_MANY_REQUEST:
        return HttpStatus.TOO_MANY_REQUESTS;
      case ExceptionCode.UNAUTHORIZED:
        return HttpStatus.UNAUTHORIZED;
      case ExceptionCode.UNAVAILABLE:
        return HttpStatus.SERVICE_UNAVAILABLE;
      case ExceptionCode.UNHEALTHY:
        return HttpStatus.BAD_GATEWAY;
      default:
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
}
