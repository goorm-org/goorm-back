import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { LoginUser } from '@base/decorator/LoginUser.decorator';
import { LoginGuard } from '@base/guard/Login.token.guard';
import { PlaceOrmEntity } from '@entity/Place.orm.entity';
import { ShortsService } from '@application/shorts/Shorts.service';

@Controller('shorts')
@UseGuards(LoginGuard)
export class ShortsController {
  constructor(
    @Inject(ShortsService)
    private readonly shortsService: ShortsService,
  ) {}

  @Get()
  async getShortsList(@LoginUser() userId: number): Promise<PlaceOrmEntity[]> {
    console.log('User ID for shorts list:', userId);
    return this.shortsService.getShortsList();
  }
}
