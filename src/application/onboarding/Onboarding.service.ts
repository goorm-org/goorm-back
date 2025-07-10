import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { OnboardingRepository } from '@repository/onboarding/Onboarding.repository';
import { CreateOnboardingReqDto } from '@controller/abc/dto/CreateOnboarding.req.dto';
import { OnboardingOrmEntity } from '@entity/Onboarding.orm.entity';
import { ChangeOnboardingReqDto } from '@controller/onboarding/dto/ChangeOnboarding.req.dto';

@Injectable()
export class OnboardingService {
  constructor(
    @Inject(OnboardingRepository)
    private readonly onboardingRepository: OnboardingRepository,
  ) {}

  async createOnboarding(
    userId: number,
    dto: CreateOnboardingReqDto,
  ): Promise<OnboardingOrmEntity> {
    const onboarding = new OnboardingOrmEntity();
    onboarding.userId = userId;
    onboarding.from = new Date(dto.from);
    onboarding.to = new Date(dto.to);
    onboarding.vibeList = dto.vibeList;
    onboarding.placeCategoryList = dto.placeCategoryList;

    return this.onboardingRepository.saveOne(onboarding);
  }

  async getOnboarding(userId: number): Promise<OnboardingOrmEntity | null> {
    return await this.onboardingRepository.findOneById(userId);
  }

  async changeOnboarding(
    userId: number,
    dto: ChangeOnboardingReqDto,
  ): Promise<OnboardingOrmEntity> {
    const onboarding = await this.onboardingRepository.findOneByUserId(userId);
    if (!onboarding) {
      throw new NotFoundException('Onboarding not found');
    }
    onboarding.vibeList = dto.vibeList;
    onboarding.placeCategoryList = dto.placeCategoryList;
    return await this.onboardingRepository.saveOne(onboarding);
  }
}
