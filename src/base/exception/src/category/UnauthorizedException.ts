import { ExceptionCode } from '../enum';
import { RootException } from './RootException';
export class UnauthorizedException extends RootException {
  get code(): any {
    return ExceptionCode.UNAUTHORIZED;
  }
}
