import { Module } from '@nestjs/common';

import { RepositoryModule as AbcRepositoryModule } from './abc/Repository.module';
import { OnboardingRepositoryModule } from './onboarding/Repository.module';
import { PlaceRepositoryModule } from './place/Repository.module';
import { BookmarkRepositoryModule } from './bookmark/Repository.module';

@Module({
  imports: [
    AbcRepositoryModule,
    OnboardingRepositoryModule,
    PlaceRepositoryModule,
    BookmarkRepositoryModule,
  ],
  exports: [
    AbcRepositoryModule,
    OnboardingRepositoryModule,
    PlaceRepositoryModule,
    BookmarkRepositoryModule,
  ],
})
export class RepositoryModule {}
