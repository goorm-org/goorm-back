import { IsArray, IsDate, IsDateString, IsNumber } from 'class-validator';

export class CreateOnboardingReqDto {
  @IsArray()
  @IsNumber({}, { each: true })
  vibeList: number[];

  @IsDateString()
  from: Date;

  @IsDateString()
  to: Date;

  @IsArray()
  @IsNumber({}, { each: true })
  placeCategoryList: number[];
}
