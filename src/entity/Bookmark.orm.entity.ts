import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseDateOrmEntity } from '@base/database/BaseDate.orm.entity';
import { PlaceOrmEntity } from './Place.orm.entity';

@Entity('bookmark')
export class BookmarkOrmEntity extends BaseDateOrmEntity {
  @Column()
  userId: number;

  @ManyToOne(() => PlaceOrmEntity, (place) => place.bookmarks)
  place: PlaceOrmEntity;
}
