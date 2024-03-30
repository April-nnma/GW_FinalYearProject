import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: '*',
  });
  app.use(express.static('.'));

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port, () => {
    console.log('port:', port);
  });
}

bootstrap();
