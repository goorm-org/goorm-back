import { Module } from '@nestjs/common';
import { AbcController } from '@controller/abc/rest/Abc.controller';
import { ServiceModule } from '@application/Service.module';

@Module({
  imports: [ServiceModule],
  controllers: [AbcController],
})
export class ControllerModule {}
