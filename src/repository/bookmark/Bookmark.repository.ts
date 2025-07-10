import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseOrmRepository } from '@base/database/Base.repository';
import { BookmarkOrmEntity } from '@entity/Bookmark.orm.entity';

@Injectable()
export class BookmarkRepository extends BaseOrmRepository<BookmarkOrmEntity> {
  constructor(
    @InjectRepository(BookmarkOrmEntity)
    repository: Repository<BookmarkOrmEntity>,
  ) {
    super(repository);
  }
  findOneByIdAndUserId(
    id: number,
    userId: number,
  ): Promise<BookmarkOrmEntity | null> {
    return this.repository.findOne({
      where: { id, userId },
      relations: ['place'],
    });
  }

  async findByUserId(userId: number): Promise<BookmarkOrmEntity[]> {
    return this.repository.find({
      where: { userId },
      relations: ['place'],
    });
  }

  async findByUserIdAndPlaceId(
    userId: number,
    placeId: number,
  ): Promise<BookmarkOrmEntity | null> {
    return this.repository.findOne({
      where: { userId, place: { id: placeId } },
      relations: ['place'],
    });
  }

  async deleteByUserIdAndPlaceId(
    userId: number,
    placeId: number,
  ): Promise<void> {
    await this.repository.delete({ userId, place: { id: placeId } });
  }
}
