import './boilerplate.polyfill';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsModule } from './modules/cats/cats.module';
import { DogsModule } from './modules/dogs/dogs.module';
import { PostEntity } from './modules/post/entities/post.entity';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const entities = [
          __dirname + '/modules/**/*.entity{.ts,.js}',
          __dirname + '/modules/**/*.view-entity{.ts,.js}',
        ];

        console.log('entities', entities);

        return {
          entities,
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'robot_notification',
          synchronize: true,
        };
      },
    }),
    CatsModule,
    DogsModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
