import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Aluno } from "../entity/Aluno"

export class AlunoController {

    private alunoRepository = AppDataSource.getRepository(Aluno)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.alunoRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const CPF = request.params.CPF


        const aluno = await this.alunoRepository.findOne({
            where: { CPF }
        })

        if (!aluno) {
            return "Aluno não cadastrado"
        }
        return aluno
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const aluno = this.alunoRepository.create(request.body);
            const result = await this.alunoRepository.save(aluno);

            return result;



        } catch (error) {
            return error.message;
        }
    }



    async remove(request: Request, response: Response, next: NextFunction) {
        const CPF = request.params.CPF

        let alunoToRemove = await this.alunoRepository.findOne({
            where: { CPF }
        })

        if (!alunoToRemove) {
            return "Esse aluno não existe"
        }

        await this.alunoRepository.remove(alunoToRemove)

        return "O aluno foi removido"
    }

}