import styled from "styled-components";
import { useEffect, useState } from "react";

//Footer at the end of the website, it display a random advice fetched from api.adviceslip.com:
const Footer = () => {
    const [yourAdvice, setYourAdvice] = useState();

    useEffect(() => { 
    fetch('	https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        setYourAdvice(data.slip.advice);
    })
    }, []);

    return ( 
        <>
        <FooterDiv><div>© STACKED DECKS 2022 ©</div>&nbsp;<div>{yourAdvice}</div></FooterDiv>
        </>
    );
}

export default Footer;

const FooterDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
font-size: larger;
background-color: black;
color: white;
height: 100px;
`;