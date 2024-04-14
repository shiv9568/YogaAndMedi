import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Blog from './component/Blog'
import Aliment from './component/Aliment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Digestive from './component/Digestive'
import Heart from './component/Heart'
import Asthma from './component/Asthma'
import Anxiety from './component/Anxiety'
import Jointpain from './component/Jointpain'


function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path={"/digestive"} element={<Digestive />}/>
          <Route path={"/heart"} element={<Heart />}/>
          <Route path={"/asthma"} element={<Asthma />}/>
          <Route path={"/anxiety"} element={<Anxiety />}/>
          <Route path={"/jointpain"} element={<Jointpain />}/>
            
        </Routes>
      </Router>
      <Home/>
      <Aliment/>
      <Blog/>
     

    </>
  )
}

export default App
