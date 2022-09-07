import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";

//This component display user information when logged in:
const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && ( 
        <ProfileDivContainer>
        <ProfilePicture src={user.picture} alt={user.name} />
        <EmailH2>{user.email}</EmailH2>
        </ProfileDivContainer>
        )
    )
}

const ProfilePicture = styled.img`
    margin-left: 10px;
    width: 45px;
    border-radius: 40px;
    @media (max-width: 1300px) {
        display: none;
    }
`;

const EmailH2 = styled.div`
    color: white;
    margin-left: 10px;
    @media (max-width: 1300px) {
        display: none;
    }
`;

const ProfileDivContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export default Profile