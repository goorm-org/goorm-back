import { Module } from '@nestjs/common';
import { BaseModule } from '@base/Base.module';
import { ControllerModule } from '@controller/Controller.module';
import { ServiceModule } from '@application/Service.module';
import { RepositoryModule } from '@repository/abc/Repository.module';

@Module({
  imports: [ControllerModule, BaseModule, ServiceModule, RepositoryModule],
})
export class AppModule {}
