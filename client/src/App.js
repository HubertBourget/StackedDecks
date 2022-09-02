import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Advice from './components/Advice';
import { useAuth0 } from '@auth0/auth0-react';
import Editor from './components/Editor';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CourseManagementPannel from './components/CourseManagementPannel';


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Main>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cmp" element={<CourseManagementPannel />} />
          <Route path="/editor/:courseId" element={<Editor />} />
        </Routes>
      </Main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
const Main = styled.div`
  height:99vh;
  background-image: linear-gradient(to bottom right, #000000, #292929);
`;

export default App;


{/* <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Advice/>
      <Editor />
    </> */}