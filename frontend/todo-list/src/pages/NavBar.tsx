import styled from "styled-components";
import { SearchInput } from "../components/Input/SearchInput";

function NavBar(){
    return (
        <StyledNavBar>
            <SearchInput/>
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