import { ExceptionCode } from '../enum';
import { RootException } from './RootException';
export class NotFoundException extends RootException {
  get code(): any {
    return ExceptionCode.NOT_FOUND;
  }
}
