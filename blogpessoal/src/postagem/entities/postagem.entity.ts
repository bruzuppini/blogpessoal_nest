/* eslint-disable prettier/prettier */

import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tema } from '../tema/entities/tema.entity';

@Entity({name: "tb_postagens"}) // criação da tabela no banco de dados, com o nome "tb_postagens"
export class Postagem {

    @PrimaryGeneratedColumn() // criação da chave primária, com auto incremento
  id!: number;

    @IsNotEmpty() // verificação de que o campo "titulo" não está vazio
    @Column({length: 255, nullable: false}) // criação da coluna "titulo" do tipo string, com tamanho máximo de 255 caracteres e não nula
  titulo!: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false}) // criação da coluna "texto" do tipo string, com tamanho máximo de 1000 caracteres e não nula
  texto!: string;

    @UpdateDateColumn() // criação da coluna "data" do tipo date, que é atualizada automaticamente toda vez que a postagem é atualizada
  data!: Date;

  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: "CASCADE" // quando um tema for deletado, todas as postagens relacionadas a ele também serão deletadas
  })
  tema: Tema
}
