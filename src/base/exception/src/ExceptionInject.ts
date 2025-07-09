import { Inject } from '@nestjs/common';

import { ExceptionToken } from './ExceptionToken';

export function InjectExceptionMessage() {
  return Inject(ExceptionToken.MESSAGE);
}
