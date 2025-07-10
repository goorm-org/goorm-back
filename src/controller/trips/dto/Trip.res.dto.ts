import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsObject, ValidateNested } from 'class-validator';
import { OnboardingResDto } from '../../onboarding/dto/Onboarding.res.dto';
import { PlacesPerDayResDto } from './PlacesPerDay.res.dto';

export class TripResDto {
  @IsNumber()
  id: number;

  @IsObject()
  @ValidateNested()
  @Type(() => OnboardingResDto)
  onboarding: OnboardingResDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlacesPerDayResDto)
  placesPerDayList: PlacesPerDayResDto[];
}
