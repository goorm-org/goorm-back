import { SerializedException } from '@base/exception/src/category';

import { LogInfo } from './LogInfoTemplate';

export type ErrorLogInfo = LogInfo<SerializedException> & {
  filter?: string;
};
