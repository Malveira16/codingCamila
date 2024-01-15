import { TrocaController } from "../controller/TrocaController";

export const TrocaRoutes = [{
    method: "get",
    route: "/trocas",
    controller: TrocaController,
    action: "all",
}, {
    method: "get",
    route: "/trocas/:idTroca",
    controller: TrocaController,
    action: "one",
}, {
    method: "post",
    route: "/trocas",
    controller: TrocaController,
    action: "trocar"
}]

