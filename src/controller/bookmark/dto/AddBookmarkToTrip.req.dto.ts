import { IsNumber } from 'class-validator';

export class AddBookmarkToTripReqDto {
  @IsNumber()
  tripId: number;
}
