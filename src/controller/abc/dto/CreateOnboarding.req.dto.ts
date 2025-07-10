import { IsArray, IsDateString, IsNumber } from 'class-validator';

export class CreateOnboardingReqDto {
  @IsArray()
  @IsNumber({}, { each: true })
  vibeList: number[];

  @IsDateString()
  from: string;

  @IsDateString()
  to: string;

  @IsArray()
  @IsNumber({}, { each: true })
  placeCategoryList: number[];
}
