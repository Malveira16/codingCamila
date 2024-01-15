// entity/Aluno.ts

import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Turma } from './Turma';

@Entity()
export class Aluno {
    @PrimaryColumn({ type: "varchar", length: 14 })
    public CPF: string;

    @Column()
    public nome: string;

    @Column()
    public email: string;

    @Column()
    public telefone: string;

    @ManyToOne(() => Turma)
    @JoinColumn({ name: "idTurma" })
    public idTurma: Turma;


    constructor() {
        
    }
}
