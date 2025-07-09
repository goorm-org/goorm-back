import { ExceptionCode } from '../enum';
import { RootException } from './RootException';
export class NotAllowedException extends RootException {
  get code(): any {
    return ExceptionCode.NOT_ALLOWED;
  }
}
