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
    const places =
      await this.placeRepository.findByPlaceIdsWithoutDegrees(placeIds);

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

    // const placeNames = places.map((place) => place.title);

    // if (
    //   date === '2025-07-11' &&
    //   // placeNames.includes('Hae Wol Jeong', 'Dongmun Public Market', 'Alice')
    // ) {
    // }

    const startTime = 11;

    // TODO recommendations 수정 필요
    const recommendations = await this.placeRepository.findPlacesNotInIds([
      6, 7, 8, 9,
    ]);

    const Alice = places.find((place) => place.title === 'Alice');
    if (Alice) {
      Alice.tripHours = [18, 20];
      Alice.congestionDegree = 3;
      Alice && (Alice.recommendations = recommendations);
    }

    const Dongmun = places.find(
      (place) => place.title === 'Dongmun Public Market',
    );
    if (Dongmun) {
      Dongmun.tripHours = [14, 18];
      Dongmun.congestionDegree = 1;
    }

    const HaeWolJeong = places.find((place) => place.title === 'Hae Wol Jeong');
    if (HaeWolJeong) {
      HaeWolJeong.tripHours = [11, 14];
      HaeWolJeong.congestionDegree = 1;
    }

    return places.sort((a, b) => {
      if (!a.tripHours || a.tripHours.length === 0) return 1;
      if (!b.tripHours || b.tripHours.length === 0) return -1;
      return a.tripHours[0] - b.tripHours[0];
    });
  }

  async getMyTrips(userId: number): Promise<TripOrmEntity[]> {
    return this.tripRepository.findByUserIdWithPlaces(userId);
  }
}
