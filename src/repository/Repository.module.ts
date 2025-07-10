import { Module } from '@nestjs/common';

import { RepositoryModule as AbcRepositoryModule } from './abc/Repository.module';
import { OnboardingRepositoryModule } from './onboarding/Repository.module';

@Module({
  imports: [AbcRepositoryModule, OnboardingRepositoryModule],
  exports: [AbcRepositoryModule, OnboardingRepositoryModule],
})
export class RepositoryModule {}
