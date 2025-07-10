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
import { CreateTripReqDto } from '@controller/trips/dto/CreateTrip.req.dto';
import { TripResDto } from '@controller/trips/dto/Trip.res.dto';
import { PlaceInfoResDto } from '@controller/abc/dto/PlaceInfo.res.dto';
import { OnboardingResDto } from '@controller/onboarding/dto/Onboarding.res.dto';
import { PlacesPerDayResDto } from '../dto/PlacesPerDay.res.dto';

@Controller('trips')
@UseGuards(LoginGuard)
export class TripController {
  @Post()
  async createTrip(
    @LoginUser() userId: number,
    @Body() createTripReqDto: CreateTripReqDto,
  ): Promise<TripResDto> {
    console.log(`User ${userId} creating trip`, createTripReqDto);

    const trip = new TripResDto();
    trip.id = Math.floor(Math.random() * 1000) + 1;

    const onboarding = new OnboardingResDto();
    onboarding.vibeList = [1, 3, 5];
    onboarding.placeCategoryList = [101, 202];

    trip.onboarding = onboarding;
    trip.placesPerDayList = createTripReqDto.placesPerDayList.map((p) => {
      const placesPerDay = new PlacesPerDayResDto();
      placesPerDay.date = new Date(p.date);
      placesPerDay.places = p.placesIds.map((id) => {
        const place = new PlaceInfoResDto();
        place.id = id;
        return place;
      });
      return placesPerDay;
    });

    console.log('🚀 ~ TripController ~ trip:', trip);
    return trip;
  }

  @Get()
  async getMyTrip(@LoginUser() userId: number): Promise<TripResDto> {
    console.log(`User ${userId} fetching their trips`);
    const trip = new TripResDto();
    trip.id = 123;

    const onboarding = new OnboardingResDto();
    onboarding.vibeList = [2, 4, 6];
    onboarding.placeCategoryList = [102, 301];
    trip.onboarding = onboarding;

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
      { date: new Date('2024-08-01'), places: [place1] },
      { date: new Date('2024-08-02'), places: [place2, place3] },
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
    placesPerDay.date = new Date('2024-08-01');
    placesPerDay.places = [remainingPlace];

    return [placesPerDay];
  }
}
