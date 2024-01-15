import { AppDataSource } from "../data-source";
import {NextFunction, Request, Response } from "express"
import { Turma } from "../entity/Turma";

export class TurmaController{
    private turmaRepository = AppDataSource.getRepository(Turma)
    async all(request: Request, response: Response, next: NextFunction) {
        return this.turmaRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction){
        const idTurma = request.params.idTurma

        const turma = await this.turmaRepository.findOne({
            where:{idTurma}
        })
        if(!turma){
            return "Turma não cadastrada"
        }
        return turma
    }

    async save(request: Request, response: Response, next: NextFunction){
        try{
            const turma = await this.turmaRepository.create(request.body);
            const resultado = await this.turmaRepository.save(turma);
        }catch(error){
            return error.message;
        }
    }

    async remove(request: Request, response: Response, next: NextFunction){
        const idTurma = request.params.idTurma;
        const turmaDeletada = await this.turmaRepository.findOne({
            where: {idTurma}
        })
        if(!turmaDeletada){
            return "Essa turma não existe"
        }
        await this.turmaRepository.remove(turmaDeletada)
        return "A turma foi removida"
    }

    


}
