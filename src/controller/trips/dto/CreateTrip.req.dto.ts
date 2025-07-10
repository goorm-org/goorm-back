import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PlacesPerDayReqDto } from './PlacesPerDay.req.dto';

export class CreateTripReqDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlacesPerDayReqDto)
  placesPerDayList: PlacesPerDayReqDto[];
}
