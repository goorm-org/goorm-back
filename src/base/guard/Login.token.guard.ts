import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as any;

    const token = request.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      throw new UnauthorizedException('로그인이 필요합니다.');
    }

    // const roles = this.reflector.getAllAndMerge<string[]>('roles', [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);

    // if (roles.length && !roles.includes(user.type)) {
    //   throw new ForbiddenException(`해당 유저는 권한이 없습니다. - ${roles}`);
    // }

    return true;
  }
}
