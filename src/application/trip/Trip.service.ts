import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TripRepository } from '@repository/trip/Trip.repository';
import { TripOrmEntity } from '@entity/Trip.orm.entity';
import { AddPlacesToTripReqDto } from '@controller/trips/dto/AddPlacesToTrips.req.dto';
import { PlaceRepository } from '@repository/place/Place.repository';
import { PlaceOrmEntity } from '@entity/Place.orm.entity';

@Injectable()
export class TripService {
  constructor(
    @Inject(TripRepository)
    private readonly tripRepository: TripRepository,
    @Inject(PlaceRepository)
    private readonly placeRepository: PlaceRepository,
  ) {}

  async addPlacesToTrip(
    userId: number,
    date: string,
    placeIds: number[],
  ): Promise<PlaceOrmEntity[]> {
    console.log('🚀 ~ TripService ~ placeIds:', placeIds);
    console.log('🚀 ~ TripService ~ date:', date);
    const places = await this.placeRepository.findByPlaceIds(placeIds);

    if (places.length === 0) {
      throw new NotFoundException('Place not found');
    }

    for (const place of places) {
      const trip = new TripOrmEntity();
      trip.userId = userId;
      trip.date = date;
      trip.place = place;
      await this.tripRepository.saveOne(trip);
    }

    // TODO recommendations 수정 필요
    const recommendations =
      await this.placeRepository.findPlacesNotInIds(placeIds);
    places[0].recommendations = recommendations;

    return places;
  }

  async getMyTrips(userId: number): Promise<TripOrmEntity[]> {
    return this.tripRepository.findByUserIdWithPlaces(userId);
  }
}
