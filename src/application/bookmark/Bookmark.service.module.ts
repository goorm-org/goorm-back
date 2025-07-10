import { Module } from '@nestjs/common';
import { BookmarkService } from './Bookmark.service';
import { BookmarkRepositoryModule } from '@repository/bookmark/Repository.module';
import { PlaceRepositoryModule } from '@repository/place/Repository.module';

@Module({
  imports: [BookmarkRepositoryModule, PlaceRepositoryModule],
  providers: [BookmarkService],
  exports: [BookmarkService],
})
export class BookmarkServiceModule {}
