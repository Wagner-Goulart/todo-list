import styled from "styled-components";

type TaskIconProp = {
  icon?: string
}

function TaskIcon({icon} : TaskIconProp) {
    return  <StyledTaskIcon>{icon}</StyledTaskIcon>
}

const StyledTaskIcon = styled.span`
  flex: 1;
  flex-basis: 10%;
  padding: 0.5rem;
`;

export { TaskIcon }