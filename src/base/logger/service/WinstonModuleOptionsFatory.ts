import { Injectable } from '@nestjs/common';
import {
  WinstonModuleOptions,
  WinstonModuleOptionsFactory as IWinstonModuleOptionsFactory,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';

@Injectable()
export class WinstonModuleOptionsFactoryImpl implements IWinstonModuleOptionsFactory {
  public createWinstonModuleOptions(): WinstonModuleOptions | Promise<WinstonModuleOptions> {
    const formatList = [winston.format.json()];
    // const formatList = [];

    const env = process.env.NODE_ENV;
    if (env === 'local') {
      formatList.push(
        nestWinstonModuleUtilities.format.nestLike(undefined, { prettyPrint: true, colors: true }),
      );
    }

    return {
      transports: [
        new winston.transports.Console({
          level: process.env.APP_LOG_LEVEL,
          format: winston.format.combine(...formatList),
        }),
      ],
      // silent: env === 'test',
    };
  }
}
