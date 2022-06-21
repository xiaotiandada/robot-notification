// https://docs.nestjs.com/modules
// https://github1s.com/NarHakobyan/awesome-nest-boilerplate/blob/HEAD/src/main.ts#L1-L6
// https://jishuin.proginn.com/p/763bfbd6c4dd

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  // ClassSerializerInterceptor,
  // HttpStatus,
  // UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './setup-swagger';

export async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // forbidNonWhitelisted: true,
      whitelist: true,
      // errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
      // dismissDefaultMessages: true,
      // exceptionFactory: (errors) => new UnprocessableEntityException(errors),
    }),
  );

  setupSwagger(app);

  await app.listen(process.env.PORT || 3001);

  console.info(`server running on ${await app.getUrl()}`);

  // console.info('env', process.env);

  return app;
}

void bootstrap();
