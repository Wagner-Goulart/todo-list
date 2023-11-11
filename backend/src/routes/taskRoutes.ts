import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

async function taskRoutes(server: FastifyInstance) {
  server.post("/task", async (request) => {
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

    return task;
  });

  server.get("/task", async () => {
    const tasks = await prisma.task.findMany();

    return tasks;
  });

  server.delete("/task/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.task.delete({
      where: {
        id,
      },
    });
  });

  server.put("/task/:id", async (request) => {
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

    return task;
  });
}

export { taskRoutes }
