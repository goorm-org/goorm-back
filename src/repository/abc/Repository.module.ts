import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbcRepository } from '@repository/abc/Abc.repository';
import { AbcEntity } from '@entity/Abc.orm.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AbcEntity])],
  providers: [AbcRepository],
  exports: [AbcRepository],
})
export class RepositoryModule {}
