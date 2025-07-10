import { Controller, Get, UseGuards } from '@nestjs/common';
import { PlaceInfoResDto } from '../../abc/dto/PlaceInfo.res.dto';
import { CongestionDegree } from '../../abc/dto/CongestionDegree.res.dto';
import { PlaceDetailsReqDto } from '../../abc/dto/PlaceDetails.req.dto';
import { LoginUser } from '@base/decorator/LoginUser.decorator';
import { LoginGuard } from '@base/guard/Login.token.guard';

@Controller('shorts')
@UseGuards(LoginGuard)
export class ShortsController {
  @Get()
  async getShortsList(@LoginUser() userId: number): Promise<PlaceInfoResDto[]> {
    console.log('User ID for shorts list:', userId);

    const mockShortsList: PlaceInfoResDto[] = [];

    for (let i = 1; i <= 3; i++) {
      const mockData = new PlaceInfoResDto();
      mockData.id = i;
      mockData.name = `제주도 쇼츠 추천 장소 ${i}`;
      mockData.address = `제주특별자치도 제주시 한림읍 ${i}`;
      mockData.category = {
        high: '관광지',
        middle: ['오름', `포토스팟 ${i}`],
        low: ['일몰 명소'],
      };
      mockData.openingHours = [0, 24]; // Always open
      mockData.phoneNumber = `064-789-123${i}`;
      mockData.congestionDegreeList = [
        {
          population: Math.floor(Math.random() * 20) + 20,
          time: new Date(),
          degree: 1,
        },
        {
          population: Math.floor(Math.random() * 30) + 70,
          time: new Date(),
          degree: 2,
        },
      ] as CongestionDegree[];
      mockData.details = {
        pricePerPerson: [0, 10000],
        averagePrice: 5000,
        averageRating: 4.5 + i * 0.1,
        shortsUrl:
          i === 1
            ? 'https://youtube.com/shorts/y-GfOEK0unA?si=rS9cjIb1VLk1nEsb'
            : `https://youtube.com/shorts/BVIZIAlWYk0?si=TgeZ03Ah8FWMsKKc-${i}`,
      } as PlaceDetailsReqDto;
      mockShortsList.push(mockData);
    }

    return mockShortsList;
  }
}
