import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Advice from './components/Advice';
import { useAuth0 } from '@auth0/auth0-react';
import Editor from './components/Editor';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Advice/>
      <Editor/>
    </>
  );
}

export default App;