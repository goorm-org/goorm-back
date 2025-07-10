import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const LoginUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const {
      params: { userId },
    } = ctx.switchToHttp().getRequest() as any;

    return userId;
  },
);
