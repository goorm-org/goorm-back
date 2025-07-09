import { Request } from 'express';

export function cookieExtractor(req: Request): string {
  let token = '';

  if (req && req.cookies) {
    token = req.cookies['token'];
  }

  return token;
}
