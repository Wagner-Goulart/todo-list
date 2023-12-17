import { TaskIcon } from "./TaskIcon";
import { TaskDescription } from "./TaskDescription";
import { TaskResponsible } from "./TaskResponsible";
import { TaskDeadline } from "./TaskDeadline";
import { TaskItens } from "./TaskItens";
import { TaskWrapper } from "./TaskWrapper";

const Task = {
  wrapper: TaskWrapper,
  itens: TaskItens,
  icon: TaskIcon,
  description: TaskDescription,
  responsible: TaskResponsible,
  deadline: TaskDeadline,
}

export { Task }
