import { ReactNode } from "react";
import styled from "styled-components";

type TaskItens = {
  children: ReactNode
};

function TaskItens({ children }: TaskItens) {
  return(
    <StyledTaskItem>{children}</StyledTaskItem>
  )
  
}

const StyledTaskItem = styled.li`
  background-color: #393939;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-radius: 0.5rem;

  @media (max-width: 330px) {
    flex-direction: column;
    width: 200px;
    padding: 10px;
  }
`;

export { TaskItens };
