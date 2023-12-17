import { Task } from "../components/Tasks/Tasks";
import styled from "styled-components";

function Home() {
  return (
    <StyledHome>
      <Task.wrapper>
        <Task.itens>
          <Task.icon icon="1" />
          <Task.description task="Tirar o Lixo" />
          <Task.responsible name="Liandra Goulart" />
          <Task.deadline deadline="20/12/2023" />
        </Task.itens>
      </Task.wrapper> 

      <Task.wrapper>
        <Task.itens>
          <Task.icon icon="1" />
          <Task.description task="Tirar o Lixo" />
          <Task.responsible name="Liandra Goulart" />
          <Task.deadline deadline="20/12/2023" />
        </Task.itens>
      </Task.wrapper> 

      <Task.wrapper>
        <Task.itens>
          <Task.icon icon="1" />
          <Task.description task="Tirar o Lixo" />
          <Task.responsible name="Liandra Goulart" />
          <Task.deadline deadline="20/12/2023" />
        </Task.itens>
      </Task.wrapper> 

    </StyledHome>
  );
}

const StyledHome = styled.section`
  background-color: #d1d1d1;
  height: calc(100vh - 15rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export { Home };
