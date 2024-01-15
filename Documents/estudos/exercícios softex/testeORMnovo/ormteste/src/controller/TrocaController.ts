import { Troca } from "../entity/Troca";
import { Aluno } from "../entity/Aluno";
import { Turma } from "../entity/Turma";
import { AlunoController } from "./AlunoController";
import { AppDataSource } from "../data-source";
import {Request, Response, NextFunction} from "express"

export class TrocaController{
    private trocaRepository = AppDataSource.getRepository(Troca)
    private alunoController = new AlunoController()
    


    async all(request: Request, response: Response, next: NextFunction) {
        return this.trocaRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const idTroca = request.params.idTroca


        const troca = await this.trocaRepository.findOne({
            where: { idTroca }
        })

        if (!troca) {
            return "Aluno não cadastrado"
        }
        return troca
    }

    async trocar(request: Request, response: Response, next: NextFunction){
        const {CPF, idTurmaAtual, idTurmaDestino, justificativa} = request.body
        const aluno = await this.alunoController.one(request, response, next);
        if(!aluno || typeof aluno === 'string'){
            return "Aluno não encontrado"
        }

        const turmaAtual = aluno.idTurma
        aluno.idTurma = idTurmaDestino
        await this.alunoController.save(request, response, next)

        const troca = new Troca();
        troca.CPFaluno = aluno;
        troca.idTurmaAtual = turmaAtual;
        troca.idTurmaDestino = idTurmaDestino;
        troca.justificativa = justificativa;
        troca.status = true;
        troca.dataTroca = new Date();

        await this.trocaRepository.save(troca);
        return "Troca realizada com sucesso";


    }
        
}

