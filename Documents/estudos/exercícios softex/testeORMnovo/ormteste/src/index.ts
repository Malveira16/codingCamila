import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes/alunoRoutes";
import { TurmaRoutes } from "./routes/turmaRoutes";
import { TrocaRoutes } from "./routes/trocaRoutes";
import { Aluno } from "./entity/Aluno";
import { Turma } from "./entity/Turma";

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    TrocaRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    TurmaRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test
    /*const turma = await AppDataSource.manager.findOne(Turma, { where: { idTurma: 1 } });

    if (turma) {
        const aluno1 = AppDataSource.manager.create(Aluno, {
            CPF: "123.456-78",
            nome: "Saw",
            email: "saw@aluno.com",
            telefone: "3453-7890",
            idTurma: turma
        });

        const aluno2 = AppDataSource.manager.create(Aluno, {
            CPF: "809.574.876-79",
            nome: "Assassin",
            email: "assassin@aluno.com",
            telefone: "9070-6690",
            idTurma: turma
        });

        await AppDataSource.manager.save(Aluno, [aluno1, aluno2]);
    } else {
        console.error("Turma não encontrada");
    }*/

    console.log("Express server has started on port 3000. Open http://localhost:3000/alunos to see results");

}).catch(error => console.log(error));
