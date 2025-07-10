import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceRepository } from './Place.repository';
import { PlaceOrmEntity } from '@entity/Place.orm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceOrmEntity])],
  providers: [PlaceRepository],
  exports: [PlaceRepository],
})
export class PlaceRepositoryModule {}
