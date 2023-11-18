import { FastifyInstance } from "fastify";
import {
  createTask,
  deleteTaskDyID,
  listAllTasks,
  updateTaskByID,
} from "../controllers/taskController";

async function taskRoutes(server: FastifyInstance) {
  server.post("/task", createTask);

  server.get("/task", listAllTasks);

  server.delete("/task/:id", deleteTaskDyID);

  server.put("/task/:id", updateTaskByID);
}

export { taskRoutes };
