import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseDateOrmEntity } from '@base/database/BaseDate.orm.entity';
import { PlaceOrmEntity } from './Place.orm.entity';

@Entity('trip')
export class TripOrmEntity extends BaseDateOrmEntity {
  @Column()
  date: string;

  @Column()
  userId: number;

  @ManyToOne(() => PlaceOrmEntity, (place) => place.trips)
  place: PlaceOrmEntity;
}
