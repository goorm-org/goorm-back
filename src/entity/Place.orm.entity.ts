import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseDateOrmEntity } from '@base/database/BaseDate.orm.entity';
import { CongestionOrmEntity } from './Congestion.orm.entity';
import { BookmarkOrmEntity } from './Bookmark.orm.entity';
import { TripOrmEntity } from './Trip.orm.entity';

@Entity('place')
export class PlaceOrmEntity extends BaseDateOrmEntity {
  @Column()
  title: string;

  @Column()
  address: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({ nullable: true })
  categoryHigh: string;

  @Column({ nullable: true })
  shortsUrl: string;

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
  pricePerPerson: number[];

  @Column({ nullable: true })
  averagePrice: number;

  @Column({ nullable: true })
  averageRating: string;

  @OneToMany(() => BookmarkOrmEntity, (bookmark) => bookmark.place)
  bookmarks: BookmarkOrmEntity[];

  @ManyToOne(() => TripOrmEntity, (trip) => trip.places)
  trip: TripOrmEntity;
}
