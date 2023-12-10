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


// function Tasks() {
//   return (
//     <>
//       <TaskWrapper>

//         <TaskItens >
//           <TaskIcon icon="Icone" />
//           <TaskDescription task="Lavar a Louça" />
//           <TaskResponsible name="Wagner" />
//           <TaskDeadline deadline="09/12/2023" />
//         </TaskItens>

//         <TaskItens >
//           <TaskIcon icon="Icone" />
//           <TaskDescription task="Tirar o lixo" />
//           <TaskResponsible name="Liandra" />
//           <TaskDeadline deadline="20/12/2023" />
//         </TaskItens>

//       </TaskWrapper>
//     </>
//   );
// }





// export { Tasks };
