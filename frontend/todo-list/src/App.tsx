import { SearchInput } from "./components/Input/SearchInput";
import { Task } from "./components/Tasks/Tasks";


function App() {
  return (
    <>
      <SearchInput/>
      <Task.wrapper>
        <Task.itens>
          <Task.icon icon="1" />
          <Task.description task="Tirar o Lixo" />
          <Task.responsible name="Liandra Goulart" />
          <Task.deadline deadline="20/12/2023" />
        </Task.itens>
      </Task.wrapper>

    </>
  );
}

export default App;
