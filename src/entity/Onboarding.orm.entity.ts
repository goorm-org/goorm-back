import { Column, Entity } from 'typeorm';
import { BaseDateOrmEntity } from '@base/database/BaseDate.orm.entity';

@Entity('onboarding')
export class OnboardingOrmEntity extends BaseDateOrmEntity {
  @Column('date')
  from: Date;

  @Column('date')
  to: Date;

  @Column('simple-array')
  vibeList: number[];

  @Column('simple-array')
  placeCategoryList: number[];

  @Column()
  userId: number;
}
