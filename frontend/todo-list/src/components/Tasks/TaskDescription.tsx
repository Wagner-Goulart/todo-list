import styled from "styled-components";

type TaskDescriptionProp = {
    task : string
}

function TaskDescription({task} : TaskDescriptionProp){
    return  <StyledTaskDescription>{task}</StyledTaskDescription>
}

const StyledTaskDescription = styled.span`
  flex-basis: 25%;
  flex: 3;
  padding: 0.5rem;
`;

export { TaskDescription }