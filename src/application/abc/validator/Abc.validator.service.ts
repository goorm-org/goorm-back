import { Injectable, NotFoundException } from '@nestjs/common';
import { AbcEntity } from '@entity/Abc.orm.entity';
import { AbcErrMsg } from '../constant/enum/AbcErrMsg.enum';

@Injectable()
export class AbcValidatorService {
  checkAbcExists(abc: AbcEntity | null): never | void {
    if (!abc) {
      throw new NotFoundException(AbcErrMsg.NOT_FOUND);
    }
  }
}
