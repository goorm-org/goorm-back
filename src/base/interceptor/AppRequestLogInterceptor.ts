import { InjectLogger } from '@base/BaseInject';
import { LoggerService } from '@base/logger/service/LoggerService';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class AppRequestLogInterceptor implements NestInterceptor {
  constructor(@InjectLogger() private readonly logger: LoggerService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const start = Date.now();
    console.log('🚀 ~ AppRequestLogInterceptor ~ start:', start);
    // this.logger.http('REQUEST', context);
    return next.handle().pipe(
      map((data) => {
        this.logger.http('RESPONSE', context, start, data);
        return data;
      }),
    );
  }
}
