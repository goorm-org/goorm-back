import {
  IsArray,
  IsNumber,
  IsOptional,
  IsObject,
  IsString,
  ValidateNested,
  IsEmpty,
} from 'class-validator';
import { CongestionDegree } from './CongestionDegree.res.dto';
import { Type } from 'class-transformer';
import { PlaceDetailsReqDto } from './PlaceDetails.req.dto';

class Category {
  @IsNumber()
  high: string;

  @IsArray()
  @IsNumber({}, { each: true })
  middle: string[];

  @IsArray()
  @IsEmpty()
  @IsNumber({}, { each: true })
  low: string[];
}

export class PlaceInfoResDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  latitude: string;

  @IsOptional()
  @IsString()
  longitude: string;

  @IsObject()
  @ValidateNested()
  @Type(() => Category)
  category: Category;

  @IsArray()
  @IsNumber({}, { each: true })
  openingHours: number[];

  @IsString()
  phoneNumber: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CongestionDegree)
  congestionDegreeList: CongestionDegree[];

  @IsObject()
  @ValidateNested()
  @IsOptional()
  @Type(() => PlaceDetailsReqDto)
  details: PlaceDetailsReqDto; // 쇼츠가 있을 경우 추가

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PlaceInfoResDto)
  recommendations: PlaceInfoResDto[];
}
