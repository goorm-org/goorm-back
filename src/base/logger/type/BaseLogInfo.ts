import { LogLevel } from './LogLevel';

export type BaseLogInfo = {
  level: LogLevel;
  userId?: number;
  correlationId?: string;
  remoteAddr: string;
  userAgent: string;
  path?: any;
  context?: string;
  host: string;

  //graphql
  args?: Record<string, any>;
  operationName?: string;

  //http
  method?: string;
  body?: string;
};
