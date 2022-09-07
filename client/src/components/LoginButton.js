import React from 'react';
import styled from "styled-components";
import { useAuth0 } from '@auth0/auth0-react';

//Login button with condittionnal rendering:
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
    !isAuthenticated && (
        <LogButton onClick={() => loginWithRedirect()}>
        Log&nbsp;In
        </LogButton>
    )
    )
}
const LogButton = styled.button`
    position:absolute;
    left: 88vw;
    background-color: transparent;
    color: #8a3004;
    font-size: large;
    font-weight: bold;
    padding: 10px;
    border: 1px solid #8a3004;
    margin: 5px;
    cursor: pointer;
    &:hover {
        background-color: #8a3004;
        color:black;
    }
        @media (max-width: 977px) {
    left: 75vw;
    }
`;


export default LoginButton