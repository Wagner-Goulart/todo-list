import { FastifyReply } from "fastify";

function handleDatabaseErro(response: FastifyReply, error: Error){
    response.status(500).send({
        success: false,
        error: error.message,
        message: "Erro no bando de dados"
    })
}

export { handleDatabaseErro }