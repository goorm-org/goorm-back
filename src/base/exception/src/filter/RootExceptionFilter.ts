import { Catch } from '@nestjs/common';

import { RootException } from '../category';
import { ExceptionFilterTemplate } from './ExceptionFilterTemplate';

@Catch(RootException)
export class RootExceptionFilter extends ExceptionFilterTemplate<RootException> {
  mapToRootException(rootException: RootException) {
    return rootException;
  }
}
