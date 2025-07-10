import { IsArray, IsNumber } from 'class-validator';

export class ChangeOnboardingReqDto {
  @IsArray()
  @IsNumber({}, { each: true })
  vibeList: number[];

  @IsArray()
  @IsNumber({}, { each: true })
  placeCategoryList: number[];
}
