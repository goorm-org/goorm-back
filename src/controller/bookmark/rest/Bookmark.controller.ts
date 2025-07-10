import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LoginUser } from 'src/base/decorator/LoginUser.decorator';
import { LoginGuard } from '@base/guard/Login.token.guard';
import { BookmarkResDto } from '../../abc/dto/Bookmark.res.dto';
import { BookmarkService } from '@application/bookmark/Bookmark.service';
import { BookmarkOrmEntity } from '@entity/Bookmark.orm.entity';
import { PlaceOrmEntity } from '@entity/Place.orm.entity';
import { PlaceInfoResDto } from '@controller/abc/dto/PlaceInfo.res.dto';

@Controller('bookmarks')
@UseGuards(LoginGuard)
export class BookmarkController {
  constructor(
    @Inject(BookmarkService)
    private readonly bookmarkService: BookmarkService,
  ) {}

  @Post('places/:placeId')
  async addBookmark(
    @Param('placeId', ParseIntPipe) placeId: number,
    @LoginUser() userId: number,
  ): Promise<BookmarkOrmEntity> {
    return await this.bookmarkService.addBookmark(userId, placeId);
  }

  @Delete('/:bookmarkId')
  async deleteBookmark(
    @Param('bookmarkId', ParseIntPipe) bookmarkId: number,
    @LoginUser() userId: number,
  ): Promise<BookmarkOrmEntity> {
    return await this.bookmarkService.deleteBookmark(userId, bookmarkId);
  }

  @Get()
  async getBookmarkList(
    @LoginUser() userId: number,
  ): Promise<BookmarkOrmEntity[]> {
    return await this.bookmarkService.getBookmarkList(userId);
  }
}
