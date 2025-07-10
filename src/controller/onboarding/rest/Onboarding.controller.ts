import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { OnboardingResDto } from '../dto/Onboarding.res.dto';
import { CreateOnboardingReqDto } from '../../abc/dto/CreateOnboarding.req.dto';
import { ChangeOnboardingReqDto } from '../dto/ChangeOnboarding.req.dto';
import { LoginUser } from 'src/base/decorator/LoginUser.decorator';
import { LoginGuard } from '@base/guard/Login.token.guard';

@UseGuards(LoginGuard)
@Controller('onboardings')
export class OnboardingController {
  @Post()
  async createOnboarding(
    @LoginUser() userId: number,
    @Body() createOnboardingReqDto: CreateOnboardingReqDto,
  ): Promise<OnboardingResDto> {
    console.log('User:', userId);
    console.log('CreateOnboardingReqDto:', createOnboardingReqDto);
    // TODO: 비즈니스 로직 구현
    const mockData = new OnboardingResDto();
    mockData.id = 1;
    mockData.vibeList = createOnboardingReqDto.vibeList;
    mockData.placeCategoryList = [10, 20, 30];
    mockData.from = new Date('2024-01-01');
    mockData.to = new Date('2024-01-03');
    return mockData;
  }

  @Get()
  async getOnboarding(@LoginUser() userId: number): Promise<OnboardingResDto> {
    console.log('🚀 ~ OnboardingController ~ getOnboarding ~ userId:', userId);
    // TODO: 비즈니스 로직 구현
    const mockData = new OnboardingResDto();
    mockData.id = 1;
    mockData.vibeList = [1, 2, 3, 4, 5];
    mockData.placeCategoryList = [11, 22, 33];
    mockData.from = new Date('2024-01-01');
    mockData.to = new Date('2024-01-03');
    return mockData;
  }

  @Patch()
  async changeOnboarding(
    @LoginUser() userId: number,
    @Body() changeOnboardingReqDto: ChangeOnboardingReqDto,
  ): Promise<OnboardingResDto> {
    console.log('User:', userId);
    console.log('ChangeOnboardingReqDto:', changeOnboardingReqDto);
    // TODO: 비즈니스 로직 구현
    const mockData = new OnboardingResDto();
    mockData.id = 1;
    mockData.vibeList = changeOnboardingReqDto.vibeList;
    mockData.placeCategoryList = changeOnboardingReqDto.placeCategoryList;
    mockData.from = new Date('2024-01-01');
    mockData.to = new Date('2024-01-03');
    return mockData;
  }
}
