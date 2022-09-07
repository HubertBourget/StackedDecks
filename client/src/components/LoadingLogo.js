import styled from "styled-components";

//Just the logo with a subtle photo effect animation on a 5s loop:
const LoadingLogo = () => {
    return ( 
        <LogoImg src={require("../img/StackedDeckLoadingLogo.gif")}/>
    );
}

export default LoadingLogo;

const LogoImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;