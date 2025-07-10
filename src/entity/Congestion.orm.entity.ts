import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseDateOrmEntity } from '@base/database/BaseDate.orm.entity';
import { PlaceOrmEntity } from './Place.orm.entity';

@Entity('congestion')
export class CongestionOrmEntity extends BaseDateOrmEntity {
  @Column()
  month: number;

  @Column()
  day: number;

  @Column()
  time: number;

  @Column()
  degree: number; // 1: 최소, 3: 혼잡

  @ManyToOne(() => PlaceOrmEntity, (place) => place.congestionDegreeList)
  place: PlaceOrmEntity;
}
