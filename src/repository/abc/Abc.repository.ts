import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseOrmRepository } from '@base/database/Base.repository';
import { AbcEntity } from '@entity/Abc.orm.entity';

@Injectable()
export class AbcRepository extends BaseOrmRepository<AbcEntity> {
  constructor(
    @InjectRepository(AbcEntity)
    repository: Repository<AbcEntity>,
  ) {
    super(repository);
  }
}
