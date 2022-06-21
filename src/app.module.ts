import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from './modules/message/message.module';
import { ConfigModule } from '@nestjs/config';
import ormconfig from './ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MessageModule as MessageCodeModule } from './modules/graphql/message/message.module';
// import { MessageSchemaModule } from './modules/graphql/message-schema/message-schema.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    MessageModule,
    MessageCodeModule,
    // MessageSchemaModule,
    // PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
