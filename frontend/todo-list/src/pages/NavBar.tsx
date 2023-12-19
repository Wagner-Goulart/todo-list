import styled from "styled-components";
import { Modal } from "../components/Modal/Modal";

function NavBar(){
    return (
        <StyledNavBar>
          <Modal/>
        </StyledNavBar>
    )
}

const StyledNavBar = styled.nav`
    background-color: #242424;
    padding: 1rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items:end;
`

export {NavBar}