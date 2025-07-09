import { Module } from '@nestjs/common';
import { GetAbcByIdHandler } from '@application/abc/handler/GetAbcById.handler';
import { AbcValidatorService } from './validator/Abc.validator.service';
import { CreateAbcHandler } from './handler/CreateAbc.handler';

@Module({
  providers: [GetAbcByIdHandler, AbcValidatorService, CreateAbcHandler],
  exports: [GetAbcByIdHandler, CreateAbcHandler],
})
export class AbcServiceModule {}
