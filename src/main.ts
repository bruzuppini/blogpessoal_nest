/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // config da aplicação nest, cria a aplicação

  process.env.TZ = '-03:00'; // config da timezone

  app.useGlobalPipes(new ValidationPipe()); // config de validaçao global, para validar os dados de entrada

  app.enableCors(); // config de cors, para permitir requisições de outras origens

  await app.listen(process.env.PORT ?? 4000); // executa a aplicação, config da porta de acesso
}
bootstrap().catch((error) => {
  console.error('Erro ao iniciar aplicação:', error);
});
