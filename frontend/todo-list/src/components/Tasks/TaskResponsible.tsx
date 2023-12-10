import styled from "styled-components";

type TaskResponsibleProp = {
    name: string
}

function TaskResponsible({name} : TaskResponsibleProp) {
    return <StyedTaskResponsible>{name}</StyedTaskResponsible>
}

const StyedTaskResponsible = styled.span`
  flex-basis: 25%;
  flex: 3;
  padding: 0.5rem;
`;

export { TaskResponsible }