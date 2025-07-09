import { ExceptionCode } from '../enum';

export const DefaultMessage = {
  [ExceptionCode.BAD_REQUEST]: 'BadRequest',
  [ExceptionCode.NOT_FOUND]: 'NotFound',
  [ExceptionCode.UNAUTHORIZED]: 'Unauthorized',
  [ExceptionCode.INTERNAL_SERVER_ERROR]: 'InternalServerError',
  [ExceptionCode.NOT_ALLOWED]: 'NotAllowed',
  [ExceptionCode.FORBIDDEN]: 'Forbidden',
  [ExceptionCode.TIME_OUT]: 'TimeOut',
  [ExceptionCode.UNAVAILABLE]: 'Unavailable',
  [ExceptionCode.UNHEALTHY]: 'Unhealthy',
  [ExceptionCode.TOO_MANY_REQUEST]: 'TooManyRequest',
  [ExceptionCode.TOKEN_EXPIRED]: 'TokenExpired',
  [ExceptionCode.INVALID_TOKEN]: 'InvalidToken',
};
