import { Type } from 'class-transformer';
import { IsArray, IsDate, ValidateNested } from 'class-validator';
import { PlaceInfoResDto } from '../../abc/dto/PlaceInfo.res.dto';

export class PlacesPerDayResDto {
  @IsDate()
  date: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlaceInfoResDto)
  places: PlaceInfoResDto[];
}
