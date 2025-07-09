import { ArgumentsHost, Injectable } from '@nestjs/common';
import { Response } from 'express';

import { RootException } from '../category';
import { ExceptionView } from '../category/type/ExceptionView.type';
import { ExceptionHelper } from '../helper';

@Injectable()
export class ErrorHandler {
  public handle(host: ArgumentsHost, rootException: RootException) {
    return this.handleHttpError(rootException, host);
  }

  private handleHttpError(rootException: RootException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = ExceptionHelper.translateCodeToHttpStatusCode(
      rootException.code,
    );
    response.status(statusCode).json(this.getErrorView(rootException));
  }

  private getErrorView(rootException: RootException, statusCode?: number) {
    const { code, desc, message } = rootException;
    return {
      exception: rootException.constructor.name,
      code: {
        onuii: code,
        status: statusCode,
      },
      message: {
        server: message,
        client: desc,
      },
    } as ExceptionView;
  }
}
