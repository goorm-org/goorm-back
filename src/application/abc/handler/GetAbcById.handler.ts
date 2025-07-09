import { Injectable } from '@nestjs/common';
import { AbcEntity } from '@entity/Abc.orm.entity';
import { AbcRepository } from '@repository/abc/Abc.repository';
import { AbcValidatorService } from '../validator/Abc.validator.service';

@Injectable()
export class GetAbcByIdHandler {
  constructor(
    private readonly abcRepository: AbcRepository,
    private readonly abcValidator: AbcValidatorService,
  ) {}

  async handle(id: number): Promise<AbcEntity | null> {
    const abc = await this.abcRepository.findOneById(id);
    this.abcValidator.checkAbcExists(abc);

    return abc;
  }
}
