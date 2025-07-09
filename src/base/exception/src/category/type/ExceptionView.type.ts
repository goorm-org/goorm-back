import { ExceptionCode } from '@base/exception/src/enum';

export type ExceptionView = {
  exception: string;
  message: {
    server: string | string[];
    client: string;
  };
  code: {
    status: number;
    onuii: ExceptionCode;
  };
};
