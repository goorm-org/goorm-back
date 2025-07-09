import { Module, Global } from '@nestjs/common';
import { MyConfigModule } from '@base/config/MyConfig.module';
import { MySqlTypeOrmModule } from '@base/database/MysqlTypeorm.db.module';
import { GraphQLModule } from '@base/graphql/GraphQL.module';

@Global()
@Module({
  imports: [MyConfigModule, MySqlTypeOrmModule, GraphQLModule],
  exports: [MyConfigModule, MySqlTypeOrmModule, GraphQLModule],
})
export class BaseModule {}
