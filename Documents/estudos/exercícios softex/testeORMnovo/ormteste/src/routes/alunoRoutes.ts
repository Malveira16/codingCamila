import { AlunoController } from "../controller/AlunoController"
import { Aluno } from "../entity/Aluno"

export const Routes = [{
    method: "get",
    route: "/alunos",
    controller: AlunoController,
    action: "all"
}, {
    method: "get",
    route: "/alunos/:CPF",
    controller: AlunoController,
    action: "one"
}, {
    method: "post",
    route: "/alunos",
    controller: AlunoController,
    action: "save"
}, {
    method: "delete",
    route: "/alunos/:CPF",
    controller: AlunoController,
    action: "remove"
}]