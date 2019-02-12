import { Logger } from '@nestjs/common';

import { Sequelize } from 'sequelize-typescript';

import * as config from 'config';
import { DB_CONNECTION_TOKEN } from './contants';

export const databaseProvider = {
  provide: DB_CONNECTION_TOKEN,
  useFactory: async(): Promise<Sequelize> => {
    const host = '127.0.0.1';
    const port = 5432;
    const username = 'postgres';
    const password = '';
    const database = 'trucks';
    const schema = 'public';
    const url = `postgres://${username}:${password}@${host}:${port}/${database}?schema=${schema}`;
    const sequelize = new Sequelize({
      dialect: 'postgres',
      logging: (message: string) => Logger.log(message, 'DatabaseProvider'),
      modelPaths: [
        __dirname + `/../model/entities/*.ts`,
      ],
      url,
    });
    return sequelize;
  }
}
