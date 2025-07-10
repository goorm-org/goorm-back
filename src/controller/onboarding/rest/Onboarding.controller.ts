import {
  Body,
  Controller,
  Get,
  Inject,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OnboardingResDto } from '../dto/Onboarding.res.dto';
import { CreateOnboardingReqDto } from '../../abc/dto/CreateOnboarding.req.dto';
import { ChangeOnboardingReqDto } from '../dto/ChangeOnboarding.req.dto';
import { LoginUser } from 'src/base/decorator/LoginUser.decorator';
import { LoginGuard } from '@base/guard/Login.token.guard';
import { OnboardingService } from '@application/onboarding/Onboarding.service';
import { OnboardingOrmEntity } from '@entity/Onboarding.orm.entity';

@UseGuards(LoginGuard)
@Controller('onboardings')
export class OnboardingController {
  constructor(
    @Inject(OnboardingService)
    private readonly onboardingService: OnboardingService,
  ) {}

  @Post()
  async createOnboarding(
    @LoginUser() userId: number,
    @Body() createOnboardingReqDto: any,
  ): Promise<OnboardingOrmEntity> {
    console.log(
      '🚀 ~ OnboardingController ~ createOnboardingReqDto:',
      createOnboardingReqDto,
    );
    return await this.onboardingService.createOnboarding(
      userId,
      createOnboardingReqDto,
    );
  }

  @Get()
  async getOnboarding(
    @LoginUser() userId: number,
  ): Promise<OnboardingOrmEntity | null> {
    return await this.onboardingService.getOnboarding(userId);
  }

  @Patch()
  async changeOnboarding(
    @LoginUser() userId: number,
    @Body() changeOnboardingReqDto: ChangeOnboardingReqDto,
  ): Promise<OnboardingOrmEntity> {
    return await this.onboardingService.changeOnboarding(
      userId,
      changeOnboardingReqDto,
    );
  }
}
