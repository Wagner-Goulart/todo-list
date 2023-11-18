import { FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";
import { prisma } from "../lib/prisma";
import { handleDatabaseErro } from "../utils/handleDatabaseErro";

async function createUser(request: FastifyRequest, response: FastifyReply) {
  try {
    const bodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
    });

    const { name, email } = bodySchema.parse(request.body);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });

    response.send({
      success: true,
      data: user,
      message: "Usuário Cadastrado com sucesso",
    });
  } catch (erro: any) {
    if (erro instanceof ZodError) {
      response.status(400).send({
        success: false,
        erro: erro.errors,
        message: "Erro ao criar o(s) usuário(s)",
      });
    } else {
      handleDatabaseErro(response, erro);
    }
  }
}

async function listAllUser() {
  const users = await prisma.user.findMany();

  return users;
}

async function deleteUserById(request: FastifyRequest, response: FastifyReply) {
  try {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.user.delete({
      where: {
        id,
      },
    });

    response.send({
      success: true,
      message: "Usuário deletado com  sucesso",
    });
  } catch (erro) {
    if (erro instanceof ZodError) {
      response.status(400).send({
        success: false,
        erro: erro.errors,
        message: "Erro ao deletar o(s) usuário(s)",
      });
    }
  }
}

async function uptadateUserById(
  request: FastifyRequest,
  response: FastifyReply
) {
  try {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      name: z.optional(z.string()),
      email: z.optional(z.string().email()),
    });

    const { name, email } = bodySchema.parse(request.body);

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });

    response.send({
      success: true,
      data: user,
      message: "Usuário atualizado com  sucesso",
    });
  } catch (erro) {
    if (erro instanceof ZodError) {
      response.status(400).send({
        success: false,
        erro: erro.errors,
        message: "Erro ao atualizar o(s) usuário(s)",
      });
    }
  }
}

export { createUser, listAllUser, deleteUserById, uptadateUserById };
