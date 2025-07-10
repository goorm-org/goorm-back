import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BookmarkRepository } from '@repository/bookmark/Bookmark.repository';
import { BookmarkOrmEntity } from '@entity/Bookmark.orm.entity';
import { PlaceRepository } from '@repository/place/Place.repository';

@Injectable()
export class BookmarkService {
  constructor(
    @Inject(BookmarkRepository)
    private readonly bookmarkRepository: BookmarkRepository,
    @Inject(PlaceRepository)
    private readonly placeRepository: PlaceRepository,
  ) {}

  async addBookmark(
    userId: number,
    placeId: number,
  ): Promise<BookmarkOrmEntity> {
    const place = await this.placeRepository.findOneById(placeId);
    if (!place) {
      throw new NotFoundException('Place not found');
    }

    const existingBookmark =
      await this.bookmarkRepository.findByUserIdAndPlaceId(userId, placeId);

    if (existingBookmark) {
      return existingBookmark;
    }

    const bookmark = new BookmarkOrmEntity();
    bookmark.userId = userId;
    bookmark.place = place;

    return this.bookmarkRepository.saveOne(bookmark);
  }

  async deleteBookmark(bookmarkIds: number[]): Promise<BookmarkOrmEntity[]> {
    console.log(
      '🚀 ~ BookmarkService ~ deleteBookmark ~ bookmarkIds:',
      bookmarkIds,
    );
    const bookmarks = await this.bookmarkRepository.findManyByIds(bookmarkIds);

    if (bookmarks.length === 0) {
      throw new NotFoundException('Bookmark not found');
    }

    for (const bookmark of bookmarks) {
      await this.bookmarkRepository.removeOneById(bookmark.id);
    }
    return bookmarks;
  }

  async getBookmarkList(userId: number): Promise<BookmarkOrmEntity[]> {
    return this.bookmarkRepository.findByUserId(userId);
  }
}
