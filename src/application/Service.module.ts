import { Module } from '@nestjs/common';

import { AbcServiceModule } from './abc/Abc.service.module';
import { OnboardingServiceModule } from './onboarding/Onboarding.service.module';

@Module({
  imports: [AbcServiceModule, OnboardingServiceModule],
  exports: [AbcServiceModule, OnboardingServiceModule],
})
export class ServiceModule {}
