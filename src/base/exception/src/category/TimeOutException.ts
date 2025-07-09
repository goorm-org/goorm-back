import { ExceptionCode } from '../enum';
import { RootException } from './RootException';
export class TimeOutException extends RootException {
  get code(): any {
    return ExceptionCode.TIME_OUT;
  }
}
