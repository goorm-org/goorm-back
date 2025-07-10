import { Module } from '@nestjs/common';
import { ShortsService } from './Shorts.service';
import { PlaceRepositoryModule } from '@repository/place/Repository.module';

@Module({
  imports: [PlaceRepositoryModule],
  providers: [ShortsService],
  exports: [ShortsService],
})
export class ShortsServiceModule {}
