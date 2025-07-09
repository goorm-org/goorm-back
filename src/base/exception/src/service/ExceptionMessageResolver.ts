import { HttpException, Injectable } from '@nestjs/common';

import { RootException } from '../category';
import { DefaultMessage } from '../constant';
import { ExceptionCode } from '../enum';

@Injectable()
export class ExceptionMessageResolver {
  public resolve(rootException: RootException): void {
    const { cause } = rootException;
    if (rootException.message) {
      return;
    }
    if (!cause) {
      /**
       * cause가 없다는 말은, RootExceptionFilter에서 걸러졌다는 뜻이 되며, 리졸빙된 message를 넘겨주면 된다.
       */
      rootException.message = this.getDefaultMessage(rootException.code);
    } else if (cause instanceof HttpException) {
      /**
       * cause가 있고, 이게 HttpException라면, response 안에 있는 message를 꺼낸다. 해당 에러는 예측 가능한 에러[Ex) ClassValidator 에러]
       * 해당 에러의 메시지는 리졸빙이 진행되지 않은 상태
       */
      if (Array.isArray(cause.getResponse()['message'])) {
        rootException.message = cause.getResponse()['message'];
      } else {
        rootException.message = this.getDefaultMessage(rootException.code);
      }
    } else {
      /**
       * cause가 있고, 이게 HttpException이 아니라면, cause는 Error 타입이므로 해당 message를 꺼낸다.
       * 해당 에러는 예측 불가능 에러이므로, 메시지 리졸빙은 불가
       * 해당 에러는 서버 내부적 에러[Ex) Prisma의 Unique Constraint Exception]의 가능성이 크므로, rootException의 message를 사용한다. [cause.message는 log에 찍는다.]
       */
      rootException.message = this.getDefaultMessage(rootException.code);
    }
  }

  private getDefaultMessage(code: ExceptionCode) {
    return DefaultMessage[code];
  }
}
