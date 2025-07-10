import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseOrmRepository } from '@base/database/Base.repository';
import { OnboardingOrmEntity } from '@entity/Onboarding.orm.entity';

@Injectable()
export class OnboardingRepository extends BaseOrmRepository<OnboardingOrmEntity> {
  constructor(
    @InjectRepository(OnboardingOrmEntity)
    repository: Repository<OnboardingOrmEntity>,
  ) {
    super(repository);
  }

  findOneByUserId(userId: number): Promise<OnboardingOrmEntity | null> {
    return this.repository.findOne({ where: { userId } });
  }
}
