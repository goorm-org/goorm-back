import { Module } from '@nestjs/common';

import { RepositoryModule as AbcRepositoryModule } from './abc/Repository.module';
import { OnboardingRepositoryModule } from './onboarding/Repository.module';
import { PlaceRepositoryModule } from './place/Repository.module';
import { BookmarkRepositoryModule } from './bookmark/Repository.module';
import { TripRepositoryModule } from './trip/Repository.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AbcRepositoryModule,
    OnboardingRepositoryModule,
    PlaceRepositoryModule,
    BookmarkRepositoryModule,
    TripRepositoryModule,
  ],
  exports: [
    AbcRepositoryModule,
    OnboardingRepositoryModule,
    PlaceRepositoryModule,
    BookmarkRepositoryModule,
    TripRepositoryModule,
  ],
})
export class RepositoryModule {}
