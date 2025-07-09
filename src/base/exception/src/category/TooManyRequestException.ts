import { ExceptionCode } from '../enum';
import { RootException } from './RootException';

export class TooManyRequestException extends RootException {
  get code(): any {
    return ExceptionCode.TOO_MANY_REQUEST;
  }
}
