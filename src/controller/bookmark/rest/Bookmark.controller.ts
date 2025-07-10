import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LoginUser } from 'src/base/decorator/LoginUser.decorator';
import { PlaceInfoResDto } from '../../abc/dto/PlaceInfo.res.dto';
import { CongestionDegree } from '../../abc/dto/CongestionDegree.res.dto';
import { PlaceDetailsReqDto } from '../../abc/dto/PlaceDetails.req.dto';
import { LoginGuard } from '@base/guard/Login.token.guard';
import { BookmarkResDto } from '../../abc/dto/Bookmark.res.dto';

@Controller('bookmarks')
@UseGuards(LoginGuard)
export class BookmarkController {
  @Post(':id')
  async addBookmark(
    @Param('id', ParseIntPipe) id: number,
    @LoginUser() userId: number,
  ): Promise<BookmarkResDto> {
    console.log(`User ${userId} bookmarked place ${id}`);
    // TODO: 비즈니스 로직 구현
    const mockPlace = new PlaceInfoResDto();
    mockPlace.id = id;
    mockPlace.name = `북마크된 장소 ${id}`;
    mockPlace.address = '제주특별자치도 서귀포시';
    mockPlace.category = {
      high: '음식점',
      middle: ['흑돼지'],
      low: ['현지인 맛집'],
    };
    mockPlace.openingHours = [11, 22];
    mockPlace.phoneNumber = '064-987-6543';
    mockPlace.congestionDegreeList = [
      { population: 50, time: new Date(), degree: 2 },
    ];

    const bookmarkRes = new BookmarkResDto();
    bookmarkRes.id = Math.floor(Math.random() * 1000); // Mock bookmark ID
    bookmarkRes.place = mockPlace;
    return bookmarkRes;
  }

  @Delete(':id')
  async deleteBookmark(
    @Param('id', ParseIntPipe) id: number,
    @LoginUser() userId: number,
  ): Promise<BookmarkResDto> {
    console.log(`User ${userId} deleted bookmark for place ${id}`);
    // TODO: 비즈니스 로직 구현
    const mockPlace = new PlaceInfoResDto();
    mockPlace.id = id;
    mockPlace.name = `북마크 삭제된 장소 ${id}`;
    mockPlace.address = '제주특별자치도 제주시';
    mockPlace.category = {
      high: '카페',
      middle: ['해변 근처'],
      low: ['인스타 감성'],
    };
    mockPlace.openingHours = [9, 21];
    mockPlace.phoneNumber = '064-123-4567';
    mockPlace.congestionDegreeList = [
      { population: 30, time: new Date(), degree: 1 },
    ];
    const bookmarkRes = new BookmarkResDto();
    bookmarkRes.id = id; // Assume param id is bookmark id
    bookmarkRes.place = mockPlace;
    return bookmarkRes;
  }

  @Get()
  async getBookmarkList(
    @LoginUser() userId: number,
  ): Promise<BookmarkResDto[]> {
    console.log(`User ${userId} get bookmark list`);
    // TODO: 비즈니스 로직 구현
    const mockPlace1 = new PlaceInfoResDto();
    mockPlace1.id = 1;
    mockPlace1.name = `내 북마크 1`;
    mockPlace1.address = '제주특별자치도 서귀포시';
    mockPlace1.category = {
      high: '음식점',
      middle: ['흑돼지'],
      low: ['현지인 맛집'],
    };
    mockPlace1.openingHours = [11, 22];
    mockPlace1.phoneNumber = '064-987-6543';
    mockPlace1.congestionDegreeList = [
      { population: 50, time: new Date(), degree: 2 },
    ] as CongestionDegree[];

    const mockPlace2 = new PlaceInfoResDto();
    mockPlace2.id = 2;
    mockPlace2.name = `내 북마크 2`;
    mockPlace2.address = '제주특별자치도 제주시';
    mockPlace2.category = {
      high: '카페',
      middle: ['해변 근처'],
      low: ['인스타 감성'],
    };
    mockPlace2.openingHours = [9, 21];
    mockPlace2.phoneNumber = '064-123-4567';
    mockPlace2.congestionDegreeList = [
      { population: 30, time: new Date(), degree: 1 },
    ];

    const bookmarkRes1 = new BookmarkResDto();
    bookmarkRes1.id = 101; // Mock bookmark ID
    bookmarkRes1.place = mockPlace1;

    const bookmarkRes2 = new BookmarkResDto();
    bookmarkRes2.id = 102; // Mock bookmark ID
    bookmarkRes2.place = mockPlace2;

    return [bookmarkRes1, bookmarkRes2];
  }
}
