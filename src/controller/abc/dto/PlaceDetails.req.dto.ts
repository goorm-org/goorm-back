import { IsNumber, IsString } from 'class-validator';

export class PlaceDetailsReqDto {
  @IsNumber()
  pricePerPerson: number[]; // 1인당 평균 지불 가격 범위

  @IsNumber()
  averagePrice: number; // 평균 가격

  @IsNumber()
  averageRating: number;

  @IsString()
  shortsUrl: string;
}
