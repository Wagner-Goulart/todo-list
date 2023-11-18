import { ZodError, z } from "zod";
import { prisma } from "../lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { handleDatabaseErro } from "../utils/handleDatabaseErro";

async function createTask(request: FastifyRequest, response: FastifyReply) {
  try {
    const bodySchema = z.object({
      description: z.string(),
      deadline: z.coerce.date(),
      isCompleted: z.coerce.boolean().default(false),
    });

    const { description, deadline, isCompleted } = bodySchema.parse(
      request.body
    );

    const task = await prisma.task.create({
      data: {
        description,
        deadline,
        isCompleted,
        userId: "28a26132-0d79-4b4d-bb53-c874177b6254",
      },
    });

    response.send({
      success: true,
      data: task,
      message: "Tarefa criada com sucesso",
    });
  } catch (erro: any) {
    if (erro instanceof ZodError) {
      response.status(400).send({
        success: false,
        erro: erro.errors,
        message: "Erro ao criar a(s) tarefa(s)",
      });
    }else {
      handleDatabaseErro(response, erro);
    }
  }
}

async function listAllTasks() {
  const tasks = await prisma.task.findMany();

  return tasks;
}

async function deleteTaskDyID(request: FastifyRequest, response: FastifyReply) {
  try {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.task.delete({
      where: {
        id,
      },
    });

    response.send({
      success: true,
      message: "Tarefa excluída com sucesso",
    });
  } catch (erro: any) {
    if (erro instanceof ZodError) {
      response.status(400).send({
        success: false,
        erro: erro.errors,
        message: "Erro ao excluir a(s) tarefa(s)",
      });
    }else {
      handleDatabaseErro(response, erro);
    }
  }
}

async function updateTaskByID(request: FastifyRequest, response: FastifyReply) {
  try {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      description: z.optional(z.string()),
      deadline: z.optional(z.coerce.date()),
      isCompleted: z.optional(z.coerce.boolean().default(false)),
    });

    const { description, deadline, isCompleted } = bodySchema.parse(
      request.body
    );

    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        description,
        deadline,
        isCompleted,
      },
    });

    response.send({
      success: true,
      data: task,
      message: "Tarefa atualizada com sucesso",
    });
  } catch (erro: any) {
    if (erro instanceof ZodError) {
      response.status(400).send({
        success: false,
        erro: erro.errors,
        message: "Erro ao atualizar a(s) tarefa(s)",
      });
    }else {
      handleDatabaseErro(response, erro);
    }
  }
}

export { createTask, listAllTasks, deleteTaskDyID, updateTaskByID };
