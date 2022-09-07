import styled from "styled-components";

//A gothic theme page divider to fit with StackedDecks theme:
const PageDivider = () => {
    return ( 
        <PageDividerDiv><PageDividerImg src={require("../img/PageDivider.png")} alt="PageDivider" /></PageDividerDiv>
    );
}

export default PageDivider;
const PageDividerDiv = styled.div`
display: flex;
justify-content: center;
margin-top: 5%;
margin-bottom: 5%;
`;

const PageDividerImg = styled.img`
width: 80vw;
`;