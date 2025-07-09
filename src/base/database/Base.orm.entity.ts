import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
