import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class LoginGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as any;
    const userId = request.headers.authorization?.split('Bearer ')[1];
    request.params.userId = userId || 1;

    return true;
  }
}
