import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkRepository } from './Bookmark.repository';
import { BookmarkOrmEntity } from '@entity/Bookmark.orm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookmarkOrmEntity])],
  providers: [BookmarkRepository],
  exports: [BookmarkRepository],
})
export class BookmarkRepositoryModule {}
