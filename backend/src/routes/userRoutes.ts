import { FastifyInstance } from "fastify";
import {
  createUser,
  deleteUserById,
  listAllUser,
  uptadateUserById,
} from "../controllers/userController";

async function userRoutes(server: FastifyInstance) {
  server.post("/user", createUser);

  server.get("/user", listAllUser);

  server.delete("/user/:id", deleteUserById);

  server.put("/user/:id", uptadateUserById);
}

export { userRoutes };

