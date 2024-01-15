import { Turma } from "../entity/Turma";
import { TurmaController } from "../controller/TurmaController";

export const TurmaRoutes = [{
    method: "get",
    route: "/turmas",
    controller: TurmaController,
    action: "all"
}, {
    method: "get",
    route: "/turmas/:idTurma",
    controller: TurmaController,
    action: "one"
}, {
    method: "post",
    route: "/turmas",
    controller: TurmaController,
    action: "save"
}, {
    method: "delete",
    route: "/turmas/:idTurma",
    controller: TurmaController,
    action: "remove"
}]