import { IsArray, IsDateString, IsNumber } from 'class-validator';

export class AddPlacesToTripReqDto {
  @IsDateString()
  date: string;

  @IsArray()
  @IsNumber({}, { each: true })
  placesIds: number[];
}
