import { In, Repository } from 'typeorm';

import { BaseOrmEntity } from './Base.orm.entity';

export abstract class BaseOrmRepository<OrmEntity extends BaseOrmEntity> {
  protected constructor(readonly repository: Repository<OrmEntity>) {}

  public async findOneById(id: number): Promise<OrmEntity | null> {
    const ormEntity = await this.repository.findOne({
      where: { id: id as any },
    });
    return ormEntity ? ormEntity : null;
  }

  public async findManyByIds(ids: number[]): Promise<OrmEntity[]> {
    return await this.repository.find({
      where: { id: In(ids) as any },
    });
  }

  public async saveOne(entity: OrmEntity): Promise<OrmEntity> {
    return await this.repository.save(entity);
  }

  async updateOne(entity: OrmEntity): Promise<OrmEntity> {
    return await this.repository.save(entity);
  }

  async removeOneById(id: number): Promise<boolean> {
    await this.repository.softDelete(id);
    return true;
  }

  async removeManyByIds(ids: number[]): Promise<boolean> {
    await this.repository.softDelete(ids);
    return true;
  }

  async saveList(entities: OrmEntity[]): Promise<OrmEntity[]> {
    return await this.repository.save(entities);
  }

  async updateList(entities: OrmEntity[]): Promise<void> {
    await this.repository.save(entities);
  }
}
