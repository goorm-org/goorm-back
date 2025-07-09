import { BaseDateOrmEntity } from '@base/database/BaseDate.orm.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'abc' })
export class AbcEntity extends BaseDateOrmEntity {
  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  isActive: boolean;

  static create(name: string, age: number, isActive: boolean): AbcEntity {
    const abc = new AbcEntity();
    abc.name = name;
    abc.age = age;
    abc.isActive = isActive;
    return abc;
  }
}
