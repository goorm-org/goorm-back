import { IsNumber, IsObject, ValidateNested } from 'class-validator';
import { PlaceInfoResDto } from './PlaceInfo.res.dto';
import { Type } from 'class-transformer';

export class BookmarkResDto {
  @IsNumber()
  id: number;

  @IsObject()
  @ValidateNested()
  @Type(() => PlaceInfoResDto)
  place: PlaceInfoResDto;
}
