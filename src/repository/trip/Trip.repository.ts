import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseOrmRepository } from '@base/database/Base.repository';
import { TripOrmEntity } from '@entity/Trip.orm.entity';

@Injectable()
export class TripRepository extends BaseOrmRepository<TripOrmEntity> {
  constructor(
    @InjectRepository(TripOrmEntity)
    repository: Repository<TripOrmEntity>,
  ) {
    super(repository);
  }

  async findByUserIdWithPlaces(userId: number): Promise<TripOrmEntity[]> {
    return this.repository.find({
      where: { userId },
      relations: ['places'],
    });
  }
}
