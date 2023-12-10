import { fastify } from "fastify";
import { userRoutes } from "./routes/userRoutes";
import { taskRoutes } from "./routes/taskRoutes";

export const server = fastify();

server.register(userRoutes, taskRoutes);

server
  .listen({
    port: 3000,
  })
  //.then(() => console.log(`Servidor rodando`));
