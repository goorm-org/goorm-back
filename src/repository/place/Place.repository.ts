import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseOrmRepository } from '@base/database/Base.repository';
import { PlaceOrmEntity } from '@entity/Place.orm.entity';

@Injectable()
export class PlaceRepository extends BaseOrmRepository<PlaceOrmEntity> {
  constructor(
    @InjectRepository(PlaceOrmEntity)
    repository: Repository<PlaceOrmEntity>,
  ) {
    super(repository);
  }

  async findRandomShorts(
    limit: number,
    userId: number,
  ): Promise<PlaceOrmEntity[]> {
    return this.repository
      .createQueryBuilder('place')
      .leftJoinAndSelect(
        'place.bookmarks',
        'bookmark',
        'bookmark.userId = :userId',
        { userId },
      )
      .where('place.shortsUrl IS NOT NULL')
      .orderBy('RAND()')
      .take(limit)
      .getMany();
  }
}
