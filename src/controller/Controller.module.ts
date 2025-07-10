import { Module } from '@nestjs/common';
import { AbcController } from '@controller/abc/rest/Abc.controller';
import { ServiceModule } from '@application/Service.module';
import { OnboardingController } from './onboarding/rest/Onboarding.controller';
import { ShortsController } from './shorts/rest/Shorts.controller';
import { BookmarkController } from './bookmark/rest/Bookmark.controller';
import { TripController } from './trips/rest/Trip.controller';
import { PlaceController } from './place/rest/Place.controller';

@Module({
  imports: [ServiceModule],
  controllers: [
    AbcController,
    ShortsController,
    OnboardingController,
    BookmarkController,
    TripController,
    PlaceController,
  ],
})
export class ControllerModule {}
