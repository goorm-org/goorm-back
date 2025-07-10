import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripRepository } from './Trip.repository';
import { TripOrmEntity } from '@entity/Trip.orm.entity';
import { PlaceOrmEntity } from '@entity/Place.orm.entity';
import { PlaceRepository } from '@repository/place/Place.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TripOrmEntity, PlaceOrmEntity])],
  providers: [TripRepository, PlaceRepository],
  exports: [TripRepository, PlaceRepository],
})
export class TripRepositoryModule {}
