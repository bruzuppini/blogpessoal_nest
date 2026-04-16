/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // config da aplicação nest, cria a aplicação

  const config = new DocumentBuilder()
   .setTitle('Blog Pessoal')
    .setDescription('Projeto Blog Pessoal')
   .setContact("Generation Brasil","http://www.generationbrasil.online","generation@email.com")
    .setVersion('1.0')
    .addBearerAuth()
   .build();
   const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00'; // config da timezone

  app.useGlobalPipes(new ValidationPipe()); // config de validaçao global, para validar os dados de entrada

  app.enableCors(); // config de cors, para permitir requisições de outras origens

  await app.listen(process.env.PORT ?? 4000); // executa a aplicação, config da porta de acesso
}
bootstrap().catch((error) => {
  console.error('Erro ao iniciar aplicação:', error);
});
