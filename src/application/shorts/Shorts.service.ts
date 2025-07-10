import { Inject, Injectable } from '@nestjs/common';
import { PlaceRepository } from '@repository/place/Place.repository';
import { PlaceOrmEntity } from '@entity/Place.orm.entity';

@Injectable()
export class ShortsService {
  constructor(
    @Inject(PlaceRepository)
    private readonly placeRepository: PlaceRepository,
  ) {}

  async getShortsList(userId: number): Promise<PlaceOrmEntity[]> {
    const SHORTS_LIMIT = 5;
    return this.placeRepository.findRandomShorts(SHORTS_LIMIT, userId);
  }
}
