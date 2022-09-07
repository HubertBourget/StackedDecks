import styled from "styled-components";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

//This header has an invisible background that does not interfere with the gradient background from the body of the app.
//Clicking the logo will allow user to go back to the Home page from anywhere:
const Header =() => {
    return(
        <ButtonContainerDiv>
            <a href={"/"}><Logo src={require("../img/StackedDecks_Logo.png")}></Logo></a>
            <StackedDecksTxt src={require("../img/StackedDecks_txt.png")}></StackedDecksTxt> 
            <StackedDecksTxt2 src={require("../img/StackedDecks_txt2.png")}></StackedDecksTxt2>
            <Profile></Profile>
            <LogoutButton /><LoginButton />
        </ButtonContainerDiv>
    )
}

const ButtonContainerDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
    height: 100px;;
`;

const StackedDecksTxt = styled.img`
    margin-left: 10%;
    height: 90px;
    width: 700px;
    @media (max-width: 977px) {
    display: none;
    }
`;
const StackedDecksTxt2 = styled.img`
    margin-left: 10%;
    height: 90px;
    width: 410px;
    display: none;
    @media (max-width: 977px) {
    display: flex;
    }
`;

const Logo = styled.img`
    margin-top: 3px;
    margin-left: 3px;;
    height: 90px;
`;

export default Header;