import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react';
import Editor from './components/Editor';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CourseManagementPannel from './components/CourseManagementPannel';
import Catalog from "./components/Catalog";
import Study from "./components/Study";
import Discover from './components/Discover';


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
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/study/:courseId" element={<Study/>}/>
          <Route path="/discover/:courseCategory" element={<Discover/>}/>
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}
const Main = styled.div`
  height:100%;
  min-height: 85vh;
  background-image: linear-gradient(to bottom right, #000000, #292929);
`;

export default App;