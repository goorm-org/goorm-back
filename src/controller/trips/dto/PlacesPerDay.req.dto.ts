import { IsArray, IsDate, IsDateString, IsNumber } from 'class-validator';

export class PlacesPerDayReqDto {
  @IsDateString()
  date: Date;

  @IsArray()
  placesIds: number[];
}
