import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsObject, ValidateNested } from 'class-validator';
import { PlacesPerDayResDto } from './PlacesPerDay.res.dto';
import { PlaceInfoResDto } from '@controller/abc/dto/PlaceInfo.res.dto';

export class TripResDto {
  @IsNumber()
  id: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlacesPerDayResDto)
  placesPerDayList: PlacesPerDayResDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlaceInfoResDto)
  recommendationList: PlaceInfoResDto[];
}
