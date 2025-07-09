import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.valid('local', 'dev', 'stage', 'prod').required(),
        APP_PORT: Joi.required(),
        APP_LOG_LEVEL: Joi.valid(
          'error',
          'warn',
          'info',
          'http',
          'verbose',
          'debug',
          'silly',
        ).required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PWD: Joi.string().required(),
      }),
    }),
  ],
})
export class MyConfigModule {}
