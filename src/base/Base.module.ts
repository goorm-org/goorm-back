import { Module, Global } from '@nestjs/common';
import { MyConfigModule } from '@base/config/MyConfig.module';
import { MySqlTypeOrmModule } from '@base/database/MysqlTypeorm.db.module';
import { AppRequestLogInterceptor } from './interceptor/AppRequestLogInterceptor';
import { WinstonLoggerModule } from './logger/WinstonLogger.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Global()
@Module({
  providers: [{ provide: APP_INTERCEPTOR, useClass: AppRequestLogInterceptor }],
  imports: [MyConfigModule, MySqlTypeOrmModule, WinstonLoggerModule],
  exports: [MyConfigModule, MySqlTypeOrmModule, WinstonLoggerModule],
})
export class BaseModule {}
