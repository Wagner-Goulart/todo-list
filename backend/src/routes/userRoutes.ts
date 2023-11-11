import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

async function userRoutes(server: FastifyInstance) {
  server.post("/user", async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      email: z.string(),
    });

    const { name, email } = bodySchema.parse(request.body);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });

    return user;
  });

  server.get("/user", async () => {
    const users = await prisma.user.findMany();

    return users;
  });

  server.delete("/user/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.user.delete({
      where: {
        id,
      },
    });
  });

  server.put("/user/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      name: z.optional(z.string()),
      email: z.optional(z.string()),
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

    return user;
  });
}

export { userRoutes };
