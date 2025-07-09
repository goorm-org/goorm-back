import { ExceptionCode } from '../enum';
import { RootException } from './RootException';
export class UnavailableException extends RootException {
  get code(): any {
    return ExceptionCode.UNAVAILABLE;
  }
}
