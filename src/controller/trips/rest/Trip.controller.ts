import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { LoginGuard } from '@base/guard/Login.token.guard';
import { LoginUser } from '@base/decorator/LoginUser.decorator';
import { AddPlacesToTripReqDto } from '@controller/trips/dto/AddPlacesToTrips.req.dto';
import { TripResDto } from '@controller/trips/dto/Trip.res.dto';
import { PlaceInfoResDto } from '@controller/abc/dto/PlaceInfo.res.dto';
import { PlacesPerDayResDto } from '../dto/PlacesPerDay.res.dto';
import { TripService } from '@application/trip/Trip.service';
import { TripOrmEntity } from '@entity/Trip.orm.entity';
import { PlaceOrmEntity } from '@entity/Place.orm.entity';

@Controller('trips')
@UseGuards(LoginGuard)
export class TripController {
  constructor(
    @Inject(TripService)
    private readonly tripService: TripService,
  ) {}

  @Post()
  async addPlacesToTrip(
    @LoginUser() userId: number,
    @Body() addPlacesToTripReqDto: any,
  ): Promise<PlaceOrmEntity[]> {
    console.log('🚀 ~ TripController ~ userId:', userId);
    console.log(
      '🚀 ~ TripController ~ addPlacesToTripReqDto:',
      addPlacesToTripReqDto.date,
      addPlacesToTripReqDto.placeIds,
    );
    const places = await this.tripService.addPlacesToTrip(
      userId,
      addPlacesToTripReqDto.date,
      addPlacesToTripReqDto.placeIds,
    );

    return places;
  }

  @Get()
  async getMyTrip(@LoginUser() userId: number): Promise<TripResDto> {
    const trips = await this.tripService.getMyTrips(userId);
    // For now, let's just return the first trip if it exists.
    if (!trips || trips.length === 0) {
      throw new NotFoundException('No trips found for this user.');
    }
    return this.toTripResDto(trips[0]);
  }

  @Delete('/dates/:dateId/places')
  async deletePlacesFromTrip(
    @Query('placeIds') placeIds: number[],
    @Param('id', ParseIntPipe) id: number,
    @LoginUser() userId: number,
  ): Promise<PlacesPerDayResDto[]> {
    console.log(`User ${userId} deleting trip ${id} with placeIds ${placeIds}`);

    const remainingPlace = new PlaceInfoResDto();
    remainingPlace.id = 101;
    remainingPlace.name = '삭제한 장소';
    remainingPlace.address = '제주특별자치도 제주시';

    const placesPerDay = new PlacesPerDayResDto();
    placesPerDay.date = '2024-08-01';
    placesPerDay.places = [remainingPlace];

    return [placesPerDay];
  }

  private toTripResDto(trip: TripOrmEntity): TripResDto {
    const tripDto = new TripResDto();
    tripDto.id = trip.id;

    const placesPerDayMap = new Map<string, PlaceInfoResDto[]>();
    if (trip.place) {
      const dateKey = trip.date;
      if (!placesPerDayMap.has(dateKey)) {
        placesPerDayMap.set(dateKey, []);
      }
      const placeDto = new PlaceInfoResDto();
      placeDto.id = trip.place.id;
      placeDto.name = trip.place.title;
      placeDto.address = trip.place.address;
      placesPerDayMap.get(dateKey)!.push(placeDto);
    }

    tripDto.placesPerDayList = Array.from(placesPerDayMap.entries()).map(
      ([date, places]) => ({ date, places }),
    );

    // recommendationList mapping would go here
    tripDto.recommendationList = [];

    return tripDto;
  }
}
