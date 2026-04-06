/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemController } from "./controller/postagem.controller";
import { PostagemService } from "./services/postagem.service";
import { TemaModule } from "./tema/tema.module";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule], // importação do módulo do TypeORM para a entidade Postagem
    providers: [PostagemService], // define o serviço de postagem como um provedor do módulo, para que possa ser injetado em outros lugares do aplicativo
    controllers: [PostagemController],
    exports: [TypeOrmModule] // exporta o módulo do TypeORM para a entidade Postagem, para que possa ser usado em outros módulos do aplicativo
})
export class PostagemModule {}
 