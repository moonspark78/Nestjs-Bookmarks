import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Supprime les propriétés qui n'ont pas de décorateurs dans le DTO
  forbidNonWhitelisted: true, // Rejette la requête si des propriétés inconnues sont présentes
  transform: true, // Transforme les objets JS en instances de classes DTO
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
