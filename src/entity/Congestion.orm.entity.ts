import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseDateOrmEntity } from '@base/database/BaseDate.orm.entity';
import { PlaceOrmEntity } from './Place.orm.entity';

@Entity('congestion')
export class CongestionOrmEntity extends BaseDateOrmEntity {
  @Column()
  population: number;

  @Column()
  time: Date;

  @Column()
  degree: number;

  @ManyToOne(() => PlaceOrmEntity, (place) => place.congestionDegreeList)
  place: PlaceOrmEntity;
}
