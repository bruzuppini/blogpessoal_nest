/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
    export class PostagemService {

        constructor(
            @InjectRepository(Postagem)
            private postagemRepository: Repository<Postagem> // injeção de dependência do repositório de postagem
        ) {}

        async findAll(): Promise<Postagem[]> {
            return await this.postagemRepository.find(); // select * from tb_postagens;
        }
    }
