import { IsArray, IsDate, IsNumber } from 'class-validator';

export class OnboardingResDto {
  @IsNumber()
  id: number;

  @IsDate()
  from: Date;

  @IsDate()
  to: Date;

  @IsArray()
  @IsNumber({}, { each: true })
  vibeList: number[];

  @IsArray()
  @IsNumber({}, { each: true })
  placeCategoryList: number[];
}
