import { Module } from '@nestjs/common';

import { AbcServiceModule } from './abc/Abc.service.module';
import { OnboardingServiceModule } from './onboarding/Onboarding.service.module';
import { ShortsServiceModule } from './shorts/Shorts.service.module';
import { BookmarkServiceModule } from './bookmark/Bookmark.service.module';

@Module({
  imports: [
    AbcServiceModule,
    OnboardingServiceModule,
    ShortsServiceModule,
    BookmarkServiceModule,
  ],
  exports: [
    AbcServiceModule,
    OnboardingServiceModule,
    ShortsServiceModule,
    BookmarkServiceModule,
  ],
})
export class ServiceModule {}
