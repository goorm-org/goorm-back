import { Module } from '@nestjs/common';
import { OnboardingService } from './Onboarding.service';
import { OnboardingRepositoryModule } from '@repository/onboarding/Repository.module';

@Module({
  imports: [OnboardingRepositoryModule],
  providers: [OnboardingService],
  exports: [OnboardingService],
})
export class OnboardingServiceModule {}
