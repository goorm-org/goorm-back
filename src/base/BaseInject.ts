import { Inject } from '@nestjs/common';

import { BaseToken } from './BaseToken';

export function InjectLogger() {
  return Inject(BaseToken.LOGGER);
}
