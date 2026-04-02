/* eslint-disable prettier/prettier */

import { HttpException, Injectable } from "@nestjs/common";
import { Repository, DeleteResult, ILike } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { HttpStatus } from "@nestjs/common";

@Injectable()
    export class PostagemService {

        constructor(
            @InjectRepository(Postagem)
            private postagemRepository: Repository<Postagem> // injeção de dependência do repositório de postagem
        ) {}

        async findAll(): Promise<Postagem[]> {
            return await this.postagemRepository.find(); // select * from tb_postagens;
        }

        async findById(id: number): Promise<Postagem> {

            const postagem = await this.postagemRepository.findOne({
                where: {
                    id
                }
            });

            if(!postagem)
                throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);

            return postagem;
    }

        async create(postagem: Postagem): Promise<Postagem> {
            return await this.postagemRepository.save(postagem); // insert into tb_postagens values (...)
        }

        async delete(id: number): Promise<DeleteResult> {

            await this.findById(id); // verifica se a postagem existe, caso contrário lança uma exceção
            
            return await this.postagemRepository.delete(id);
        }

        async findAllByTitulo(titulo: string): Promise<Postagem[]> {
            return await this.postagemRepository.find({
                where:{
                    titulo: ILike(`%${titulo}%`) // select * from tb_postagens where titulo like '%titulo%'
                }
            })

        }

        async update(postagem: Postagem): Promise<Postagem> {

            await this.findById(postagem.id); // verifica se a postagem existe, caso contrário lança uma exceção

            return await this.postagemRepository.save(postagem); // update tb_postagens set ... where id = postagem.id
        }
}