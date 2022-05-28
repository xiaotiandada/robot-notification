import './boilerplate.polyfill';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './modules/cats/cats.module';
import { DogsModule } from './modules/dogs/dogs.module';
import { MessageModule } from './modules/message/message.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        entities: [
          __dirname + '/modules/**/*.entity{.ts,.js}',
          __dirname + '/modules/**/*.view-entity{.ts,.js}',
        ],
        type: process.env.DB_TYPE as 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: process.env.DB_DATABASE === 'development',
        migrationsTableName: 'custom_migration_table',
      }),
    }),
    CatsModule,
    DogsModule,
    MessageModule,
    // PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
