import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Aluno } from "./Aluno";
import { Turma } from "./Turma";
@Entity()
export class Troca{
    @PrimaryGeneratedColumn()
    idTroca: number;

    @ManyToOne(() => Aluno)
    @JoinColumn({ name: "CPFalunoId" })
    CPFaluno: Aluno;

    @ManyToOne(() => Turma)
    @JoinColumn({ name: "idTurmaDestino" })
    idTurmaDestino: Turma;

    @ManyToOne(() => Turma)
    @JoinColumn({ name: "idTurmaAtual" })
    idTurmaAtual: Turma;

    @Column()
    justificativa: string;

    @Column()
    status: boolean;

    @Column()
    dataTroca: Date;

    constructor(){}

}