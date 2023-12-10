import styled from "styled-components";

type TaskDeadlineProp = {
  deadline: string
}

function TaskDeadline({deadline}: TaskDeadlineProp) {
    return <StyledTaskDeadline>{deadline}</StyledTaskDeadline>
}

const StyledTaskDeadline = styled.span`
  flex-basis: 10%;
  flex: 1;
  padding: 0.5rem;
`;

export { TaskDeadline }