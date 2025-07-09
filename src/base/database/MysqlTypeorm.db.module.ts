import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        synchronize: configService.get<string>('NODE_ENV') !== 'prod',
        logging: configService.get<string>('NODE_ENV') === 'local',
        // timezone: 'Z',
        entities: ['dist/entity/*.orm.entity{.ts,.js}'],
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PWD'),
        database: configService.get('DB_NAME'),
      }),
    }),
  ],
})
export class MySqlTypeOrmModule {}
