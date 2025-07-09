import { ExceptionCode } from '../enum';
import { RootException } from './RootException';

export class BadRequestException extends RootException {
  get code(): any {
    return ExceptionCode.BAD_REQUEST;
  }
}
