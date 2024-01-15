import "reflect-metadata"
import { DataSource } from "typeorm"
import { Aluno } from "./entity/Aluno"
import { Turma } from "./entity/Turma"
import { Troca } from "./entity/Troca"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Aluno, Turma, Troca],
    migrations: [],
    subscribers: [],
})
