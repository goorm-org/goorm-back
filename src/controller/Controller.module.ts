import { Module } from '@nestjs/common';
import { AbcController } from '@controller/abc/rest/Abc.controller';
import { ServiceModule } from '@application/Service.module';
import { AbcQueryResolver } from '@controller/abc/gql/resolver/Abc.query.resolver';
import { AbcMutationResolver } from '@controller/abc/gql/resolver/Abc.mutation.resolver';

@Module({
  imports: [ServiceModule],
  controllers: [AbcController],
  providers: [AbcQueryResolver, AbcMutationResolver],
})
export class ControllerModule {}
