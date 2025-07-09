import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

import { BaseOrmEntity } from '@base/database/Base.orm.entity';

export class BaseDateOrmEntity extends BaseOrmEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
