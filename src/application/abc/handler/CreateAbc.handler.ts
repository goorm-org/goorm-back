import { Injectable } from '@nestjs/common';

import { AbcRepository } from '@repository/abc/Abc.repository';
import { AbcEntity } from '@entity/Abc.orm.entity';

@Injectable()
export class CreateAbcHandler {
  constructor(private readonly abcRepository: AbcRepository) {}

  async handle(
    name: string,
    age: number,
    isActive: boolean,
  ): Promise<AbcEntity> {
    const abc = AbcEntity.create(name, age, isActive);
    return this.abcRepository.saveOne(abc);
  }
}
