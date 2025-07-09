import { ExceptionCode } from '../enum';
import { SerializedException } from './type';
import { ExceptionView } from './type/ExceptionView.type';

export abstract class RootException extends Error {
  private _desc?: string;
  private readonly _cause?: Error;
  private _view?: ExceptionView;

  abstract get code(): ExceptionCode;
  constructor(message?: string, desc?: string, cause?: Error) {
    super();
    this.message = message ?? '';
    this._desc = desc;
    this._cause = cause;
  }
  get cause() {
    return this._cause;
  }
  public toJSON(): SerializedException {
    return {
      code: this.code,
      stack: this.stack ?? '',
    };
  }
  set view(view: ExceptionView) {
    this._view = view;
  }
  get view() {
    return (
      this._view ??
      ({
        exception: '',
        message: {
          server: '',
          client: '',
        },
      } as ExceptionView)
    );
  }
  set desc(desc: string) {
    this._desc = desc;
  }
  get desc() {
    return this._desc ?? '';
  }
}
