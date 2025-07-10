import { Module } from '@nestjs/common';
import { TripService } from './Trip.service';
import { TripRepositoryModule } from '@repository/trip/Repository.module';
import { PlaceRepositoryModule } from '@repository/place/Repository.module';

@Module({
  imports: [TripRepositoryModule, PlaceRepositoryModule],
  providers: [TripService],
  exports: [TripService],
})
export class TripServiceModule {}
