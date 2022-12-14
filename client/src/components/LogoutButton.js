import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

//Logout button with condittionnal rendering:
const LogoutButton = () => {
const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <LogButton onClick={() => logout()}>
            Log&nbsp;Out
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

export default LogoutButton