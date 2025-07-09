import { AbcEntity } from '@entity/Abc.orm.entity';

export class AbcResDto {
  constructor(abc: AbcEntity) {
    this.id = abc.id;
    this.name = abc.name;
    this.age = abc.age;
    this.isActive = abc.isActive;
  }

  id: number;
  name: string;
  age: number;
  isActive: boolean;
}
