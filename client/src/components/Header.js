import styled from "styled-components";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";


const Header =() => {
    return(
        <StyledMainDiv>
                <div>
                    <LogoutButton /><LoginButton />
                    <Profile></Profile>
                </div>
        </StyledMainDiv>
    )
}

const StyledMainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4D7EA6;
    padding: 0 15px;
a{
    text-decoration: none;
    font-size: 35px;
    padding: 15px;
    margin-right: 3%;
    color: #381a46;
    font-weight: bold;
}
.cart{
    display: flex;
    gap: 20px;
    
}
.probutton{
    display: flex;
    gap: 60px;
    align-items: center;
    justify-content: center;
}
`;

export default Header;