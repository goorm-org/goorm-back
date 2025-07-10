import { Module } from '@nestjs/common';

import { RepositoryModule as AbcRepositoryModule } from './abc/Repository.module';
import { OnboardingRepositoryModule } from './onboarding/Repository.module';
import { PlaceRepositoryModule } from './place/Repository.module';

@Module({
  imports: [
    AbcRepositoryModule,
    OnboardingRepositoryModule,
    PlaceRepositoryModule,
  ],
  exports: [
    AbcRepositoryModule,
    OnboardingRepositoryModule,
    PlaceRepositoryModule,
  ],
})
export class RepositoryModule {}
