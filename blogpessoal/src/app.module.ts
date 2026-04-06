/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.modules';
import { TemaModule } from './postagem/tema/tema.module';
import { Tema } from './postagem/tema/entities/tema.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
