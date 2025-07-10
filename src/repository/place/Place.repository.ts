import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

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

  async findByPlaceIds(placeIds: number[]): Promise<PlaceOrmEntity[]> {
    if (placeIds.length === 0) {
      return [];
    }
    return this.repository.find({
      where: { id: In(placeIds) },
      relations: ['congestionDegreeList'],
    });
  }

  async findPlacesNotInIds(
    excludedPlaceIds: number[],
  ): Promise<PlaceOrmEntity[]> {
    if (excludedPlaceIds.length === 0) {
      return this.repository.find(); // Return all places if exclusion list is empty
    }

    return this.repository
      .createQueryBuilder('place')
      .where('place.id NOT IN (:...excludedPlaceIds)', { excludedPlaceIds })
      .getMany();
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
      .leftJoinAndSelect('place.congestionDegreeList', 'congestionDegreeList')
      .where('place.shortsUrl IS NOT NULL')
      .orderBy('RAND()')
      .take(limit)
      .getMany();
  }
}
