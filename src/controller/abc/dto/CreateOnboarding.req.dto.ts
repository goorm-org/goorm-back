import { IsArray, IsDate, IsNumber } from 'class-validator';

export class CreateOnboardingReqDto {
  @IsArray()
  @IsNumber({}, { each: true })
  vibeList: number[];

  @IsDate()
  from: Date;

  @IsDate()
  to: Date;

  @IsArray()
  @IsNumber({}, { each: true })
  categoryList: number[];
}
