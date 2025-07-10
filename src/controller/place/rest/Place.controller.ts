import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PlaceInfoResDto } from '../../abc/dto/PlaceInfo.res.dto';
import { CongestionDegree } from '../../abc/dto/CongestionDegree.res.dto';
import { PlaceDetailsReqDto } from '../../abc/dto/PlaceDetails.req.dto';

@Controller('places')
export class PlaceController {
  @Get(':id')
  async getPlaceById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PlaceInfoResDto> {
    console.log(`Fetching place with ID: ${id}`);

    const mockData = new PlaceInfoResDto();
    mockData.id = id;
    mockData.name = '오설록 티 뮤지엄';
    mockData.address = '제주특별자치도 서귀포시 안덕면 신화역사로 15';
    mockData.category = {
      high: '관광지',
      middle: ['박물관', '체험'],
      low: ['포토스팟', '가족여행'],
    };
    mockData.openingHours = [9, 19];
    mockData.phoneNumber = '064-794-5312';
    mockData.congestionDegreeList = [
      { population: 150, time: new Date(), degree: 3 },
    ] as CongestionDegree[];
    mockData.details = {
      pricePerPerson: [0, 20000],
      averagePrice: 10000,
      averageRating: 4.6,
      shortsUrl: 'https://youtube.com/shorts/osulloc-example',
    } as PlaceDetailsReqDto;

    return mockData;
  }
}
