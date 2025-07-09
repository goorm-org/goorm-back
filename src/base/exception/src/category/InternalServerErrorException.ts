import { ExceptionCode } from '../enum';
import { RootException } from './RootException';
export class InternalServerErrorException extends RootException {
  get code(): any {
    return ExceptionCode.INTERNAL_SERVER_ERROR;
  }
}
