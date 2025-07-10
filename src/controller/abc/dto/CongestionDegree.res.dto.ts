import { IsDate, IsNumber } from 'class-validator';

export class CongestionDegree {
  @IsNumber()
  population: number; // 밀집 인구수

  @IsDate()
  time: Date; // 시간 (08:00 ~ 20:00) - 시간 데이터가 없는 경우는 한산

  @IsNumber()
  degree: number; //1: 보통, 2: 혼잡
}
