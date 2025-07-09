import { Module } from '@nestjs/common';
import { BaseModule } from '@base/Base.module';
import { ControllerModule } from '@controller/Controller.module';
import { ServiceModule } from '@application/Service.module';
import { RepositoryModule } from '@repository/abc/Repository.module';
import { WinstonLoggerModule } from './base/logger/WinstonLogger.module';
import { ExceptionModule } from './base/exception/src/Exception.module';

@Module({
  imports: [
    ControllerModule,
    BaseModule,
    ServiceModule,
    RepositoryModule,
    WinstonLoggerModule,
    ExceptionModule,
  ],
})
export class AppModule {}
