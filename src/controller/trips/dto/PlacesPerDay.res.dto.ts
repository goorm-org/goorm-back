import { Type } from 'class-transformer';
import { IsArray, IsDateString, ValidateNested } from 'class-validator';
import { PlaceInfoResDto } from '../../abc/dto/PlaceInfo.res.dto';

export class PlacesPerDayResDto {
  @IsDateString()
  date: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlaceInfoResDto)
  places: PlaceInfoResDto[];
}
