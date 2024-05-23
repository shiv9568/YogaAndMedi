import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { Component, useEffect, useState } from "react";
import Activity from './component/Activity';
import Login from "./Authenti/Login"
import Signin from "./Authenti/Signin"
import Aliment from './pages/Aliment';
import Anxiety from './pages/Anxiety';
import Article from './component/Article';
import Asthma from './pages/Asthma';
import Benefits from './component/Benefits';
import Blog from './component/Blog';
import Book from './component/Book';
import Digestive from './pages/Digestive';
import Heart from './pages/Heart';
import Home from './component/Home';
import Jointpain from './pages/Jointpain';
import Meditation from './component/Meditation';
import Navbar from './component/Navbar';
import Teacher from './component/Teacher';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import Article4 from './pages/Article4';
import Article5 from './pages/Article5';
import Article6 from './pages/Article6';
import Teacher1 from './pages/Teacher1';
import Teacher2 from './pages/Teacher2';
import Teacher3 from './pages/Teacher3';
import Teacher4 from './pages/Teacher4';
import Teacher5 from './pages/Teacher5';
import Teacher6 from './pages/Teacher6';
import Pricing from './component/Pricing';
import Classes from './component/Classes';
import Pranayam from './pages/Pranayam';
import Surya from './pages/Surya';
import Cobra from './pages/Cobra';
import Balasan from './pages/Balasan';
import Pari from './pages/Pari';
import { RecoilRoot } from 'recoil';

function App() {
 
  return (
    <>
      <RecoilRoot>
     
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/digestive"} element={<Digestive />}/>
          <Route path={"/heart"} element={<Heart />}/>
          <Route path={"/asthma"} element={<Asthma />}/>
          <Route path={"/anxiety"} element={<Anxiety />}/>
          <Route path={"/activityfud"} element={< Activity/>}/>
          <Route path={"/jointpain"} element={<Jointpain />}/>
          <Route path={"/meditation"} element={<Meditation />}/>
          <Route path={"/article"} element={<Article />}/>
          <Route path={"/article/1"} element={<Article1 />}/>
          <Route path={"/article/2"} element={<Article2 />}/>
          <Route path={"/article/3"} element={<Article3 />}/>
          <Route path={"/article/4"} element={<Article4 />}/>
          <Route path={"/article/5"} element={<Article5 />}/>
          <Route path={"/article/6"} element={<Article6 />}/>
          <Route path={"/teacher"} element={<Teacher />}/>
          <Route path={"/teacher/1"} element={<Teacher1 />}/>
          <Route path={"/teacher/2"} element={<Teacher2 />}/>
          <Route path={"/teacher/3"} element={<Teacher3 />}/>
          <Route path={"/teacher/4"} element={<Teacher4 />}/>
          <Route path={"/teacher/5"} element={<Teacher5 />}/>
          <Route path={"/teacher/6"} element={<Teacher6 />}/>
          <Route path={"/heart/pranayam"} element={<Pranayam />} />
          <Route path={"/heart/suryanamaskar"} element={<Surya />} />
          <Route path={"/heart/cobra"} element={<Cobra />} />
          <Route path={"/digestive/balasana"} element={<Balasan />} />
          <Route path={"/digestive/paripurnanavasana"} element={<Pari />} />
          <Route path={"/digestive/pranayam"} element={<Pranayam />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/booktoday"} element={<Book />}/>
          <Route path={"/pricing"} element={<Pricing />}/>
          <Route path={"/classes"} element={<Classes />}/>
         
          
          
          <Route path={"/"} element={
            <>
              <Home/>
              
              <br />
              <Benefits/>
              <Aliment/>
              <Meditation/>
              <Blog/>
            </>
          }/>
        </Routes>
      </Router>
      </RecoilRoot>
    </>
  )
}

export default App