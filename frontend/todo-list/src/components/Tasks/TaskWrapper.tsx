import styled from "styled-components";
import { ReactNode } from "react";

type TaskWrapperProps = {
    children: ReactNode
}

function TaskWrapper({ children }: TaskWrapperProps) {
  return <TaskList>{children}</TaskList>;
}

const TaskList = styled.ul`
  width: 60vw;
  min-width: 300px;
  font-size: 2rem;
  margin-top: 1rem;

  @media (max-width: 330px) {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    font-size: 1.6rem;
  }
`;

export { TaskWrapper };
