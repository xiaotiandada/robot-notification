import type { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

// Handle env
dotenv.config();

const configs: ConnectionOptions = {
  type: process.env.DB_TYPE as 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    __dirname + '/modules/**/*.entity{.ts,.js}',
    __dirname + '/modules/**/*.view-entity{.ts,.js}',
  ],
  migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: __dirname + '/database/migrations',
  },
};

// console.log('configs', configs);

export default configs;
