import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateAbcReqDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  isActive: boolean;
}
