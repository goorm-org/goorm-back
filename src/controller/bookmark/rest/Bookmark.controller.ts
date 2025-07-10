import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LoginUser } from 'src/base/decorator/LoginUser.decorator';
import { LoginGuard } from '@base/guard/Login.token.guard';
import { BookmarkService } from '@application/bookmark/Bookmark.service';
import { BookmarkOrmEntity } from '@entity/Bookmark.orm.entity';

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

  @Delete()
  async deleteBookmark(
    @Body('ids') ids: number[],
  ): Promise<BookmarkOrmEntity[]> {
    console.log('🚀 ~ BookmarkController ~ ids:', ids);
    return await this.bookmarkService.deleteBookmark(ids);
  }

  @Get()
  async getBookmarkList(
    @LoginUser() userId: number,
  ): Promise<BookmarkOrmEntity[]> {
    return await this.bookmarkService.getBookmarkList(userId);
  }
}
