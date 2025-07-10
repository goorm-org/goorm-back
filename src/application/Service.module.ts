import { Module } from '@nestjs/common';

import { AbcServiceModule } from './abc/Abc.service.module';
import { OnboardingServiceModule } from './onboarding/Onboarding.service.module';
import { ShortsServiceModule } from './shorts/Shorts.service.module';

@Module({
  imports: [AbcServiceModule, OnboardingServiceModule, ShortsServiceModule],
  exports: [AbcServiceModule, OnboardingServiceModule, ShortsServiceModule],
})
export class ServiceModule {}
