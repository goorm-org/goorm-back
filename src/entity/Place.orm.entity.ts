import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseDateOrmEntity } from '@base/database/BaseDate.orm.entity';
import { CongestionOrmEntity } from './Congestion.orm.entity';
import { BookmarkOrmEntity } from './Bookmark.orm.entity';
import { TripOrmEntity } from './Trip.orm.entity';

@Entity('place')
export class PlaceOrmEntity extends BaseDateOrmEntity {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({ nullable: true })
  categoryHigh: string;

  @Column('simple-array', { nullable: true })
  categoryMiddle: string[];

  @Column('simple-array', { nullable: true })
  categoryLow: string[];

  @Column('simple-array', { nullable: true })
  openingHours: number[];

  @Column({ nullable: true })
  phoneNumber: string;

  @OneToMany(() => CongestionOrmEntity, (congestion) => congestion.place)
  congestionDegreeList: CongestionOrmEntity[];

  @Column('json', { nullable: true })
  details: any; // 쇼츠가 있을 경우 추가

  @OneToMany(() => BookmarkOrmEntity, (bookmark) => bookmark.place)
  bookmarks: BookmarkOrmEntity[];

  @ManyToOne(() => TripOrmEntity, (trip) => trip.places)
  trip: TripOrmEntity;
}
