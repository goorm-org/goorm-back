import { Catch, HttpException, HttpStatus } from '@nestjs/common';

import {
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  NotAllowedException,
  NotFoundException,
  UnauthorizedException,
  UnavailableException,
} from '../category';
import { ExceptionFilterTemplate } from './ExceptionFilterTemplate';

@Catch(HttpException)
export class HttpExceptionFilter extends ExceptionFilterTemplate<HttpException> {
  public mapToRootException(httpException: HttpException) {
    const status = httpException.getStatus();

    const message = httpException.getResponse()['message'];
    const errorMsg = typeof message === 'string' ? message : message[0]; // class-validator의 경우 message가 배열로 들어옴

    switch (status) {
      case HttpStatus.BAD_REQUEST:
        return new BadRequestException(errorMsg);
      case HttpStatus.NOT_FOUND:
        return new NotFoundException(errorMsg);
      case HttpStatus.UNAUTHORIZED:
        return new UnauthorizedException(errorMsg);
      case HttpStatus.METHOD_NOT_ALLOWED:
        return new NotAllowedException(errorMsg);
      case HttpStatus.FORBIDDEN:
        return new ForbiddenException(errorMsg);
      case HttpStatus.SERVICE_UNAVAILABLE:
        return new UnavailableException(errorMsg);
      default:
        return new InternalServerErrorException(errorMsg);
    }
  }
}
