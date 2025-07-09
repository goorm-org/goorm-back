import { ExceptionCode } from '../enum';
import { RootException } from './RootException';

export class ForbiddenException extends RootException {
  get code(): any {
    return ExceptionCode.FORBIDDEN;
  }
}
