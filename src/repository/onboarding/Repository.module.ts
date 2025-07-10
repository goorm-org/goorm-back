import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnboardingRepository } from './Onboarding.repository';
import { OnboardingOrmEntity } from '@entity/Onboarding.orm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OnboardingOrmEntity])],
  providers: [OnboardingRepository],
  exports: [OnboardingRepository],
})
export class OnboardingRepositoryModule {}
