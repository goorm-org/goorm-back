import { Global, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import { WinstonModuleOptionsFactoryImpl } from './service/WinstonModuleOptionsFatory';
import { BaseToken } from '@base/BaseToken';
import { WinstonLogger } from './service/WinstonLogger';
import { LoggerInfoFactory } from './service/LoggerInfoFactory';

@Global()
@Module({
  imports: [
    WinstonModule.forRootAsync({ useClass: WinstonModuleOptionsFactoryImpl }),
  ],
  providers: [
    { provide: BaseToken.LOGGER, useClass: WinstonLogger },
    LoggerInfoFactory,
  ],
  exports: [BaseToken.LOGGER],
})
export class WinstonLoggerModule {}
