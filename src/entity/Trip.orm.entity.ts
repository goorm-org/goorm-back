import { Column, Entity, OneToMany } from 'typeorm';
import { BaseDateOrmEntity } from '@base/database/BaseDate.orm.entity';
import { PlaceOrmEntity } from './Place.orm.entity';

@Entity('trip')
export class TripOrmEntity extends BaseDateOrmEntity {
  @Column()
  date: string;

  @Column()
  userId: number;

  @OneToMany(() => PlaceOrmEntity, (place) => place.trip, {
    cascade: true,
  })
  places: PlaceOrmEntity[];
}
