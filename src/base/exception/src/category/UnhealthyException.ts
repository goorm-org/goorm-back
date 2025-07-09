import { ExceptionCode } from '../enum';
import { RootException } from './RootException';
export class UnhealthyException extends RootException {
  get code(): any {
    return ExceptionCode.UNHEALTHY;
  }
}
