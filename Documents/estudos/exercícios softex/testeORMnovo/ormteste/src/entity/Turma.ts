import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Turma{
    @PrimaryGeneratedColumn()
    public idTurma: number;

    @Column()
    public turno: string;

    @Column()
    public local: string;

    @Column()
    public diaSemana: string;

    @Column()
    public trilha: string;

    constructor(){}


}