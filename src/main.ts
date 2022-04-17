import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  // ClassSerializerInterceptor,
  // HttpStatus,
  // UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
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
  await app.listen(3000);
}
bootstrap();
