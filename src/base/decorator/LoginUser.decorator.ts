import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const LoginUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const {
      params: { user },
    } = ctx.switchToHttp().getRequest() as any;

    return data ? user[data] : user;
  },
);
