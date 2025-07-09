import { Catch } from '@nestjs/common';

import { InternalServerErrorException, RootException } from '../category';
import { ExceptionFilterTemplate } from './ExceptionFilterTemplate';

@Catch()
export class ErrorFilter extends ExceptionFilterTemplate<Error> {
  mapToRootException(error: Error): RootException {
    return new InternalServerErrorException(
      error.message,
      error.message,
      error,
    );
  }
}
