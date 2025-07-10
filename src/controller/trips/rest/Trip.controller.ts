import {
  Body,
  Controller,
  Delete,
  Get,
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
import { OnboardingResDto } from '@controller/onboarding/dto/Onboarding.res.dto';
import { PlacesPerDayResDto } from '../dto/PlacesPerDay.res.dto';

@Controller('trips')
@UseGuards(LoginGuard)
export class TripController {
  @Post()
  async addPlacesToTrip(
    @LoginUser() userId: number,
    @Body() addPlacesToTripReqDto: any,
  ): Promise<TripResDto> {
    console.log(`User ${userId} creating trip`, addPlacesToTripReqDto);

    const trip = new TripResDto();
    trip.id = 1;

    const recommendation1 = new PlaceInfoResDto();
    recommendation1.id = 101;
    recommendation1.name = '비자림';
    recommendation1.address = '제주특별자치도 제주시 구좌읍 비자숲길 55';
    recommendation1.latitude = '33.333333';
    recommendation1.longitude = '126.333333';

    const recommendation2 = new PlaceInfoResDto();
    recommendation2.id = 102;
    recommendation2.name = '사려니숲길';
    recommendation2.address = '제주특별자치도 제주시 조천읍 교래리';
    recommendation1.latitude = '33.333333';
    recommendation1.longitude = '126.333333';

    const place1 = new PlaceInfoResDto();
    place1.id = 1;
    place1.name = '우도';
    place1.address = '제주특별자치도 제주시 우도면';
    place1.recommendations = [recommendation1, recommendation2];

    const place2 = new PlaceInfoResDto();
    place2.id = 2;
    place2.name = '성산일출봉';
    place2.address = '제주특별자치도 서귀포시 성산읍 일출로 284-12';
    place2.recommendations = [place1];

    trip.placesPerDayList = [{ date: '2024-08-01', places: [place1, place2] }];

    return trip;
  }

  @Get()
  async getMyTrip(@LoginUser() userId: number): Promise<TripResDto> {
    console.log(`User ${userId} fetching their trips`);
    const trip = new TripResDto();
    trip.id = 123;

    const place1 = new PlaceInfoResDto();
    place1.id = 1;
    place1.name = '협재 해수욕장';
    place1.address = '제주특별자치도 제주시 한림읍 협재리';

    const place2 = new PlaceInfoResDto();
    place2.id = 2;
    place2.name = '금능 해수욕장';
    place2.address = '제주특별자치도 제주시 한림읍 금능리';

    const place3 = new PlaceInfoResDto();
    place3.id = 3;
    place3.name = '오목천 해수욕장';
    place3.address = '제주특별자치도 제주시 한림읍 오목천리';

    trip.placesPerDayList = [
      { date: '2024-08-01', places: [place1] },
      { date: '2024-08-02', places: [place2, place3] },
    ];

    return trip;
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
}
