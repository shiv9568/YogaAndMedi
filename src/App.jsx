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
import Activity from './component/Activity'
import Meditation from './component/Meditation'
import Article from './component/Article'
import Article1 from './pages/Article1'
import Article2 from './pages/Article2'
import Article3 from './pages/Article3'
import Article4 from './pages/Article4'
import Article5 from './pages/Article5'
import Article6 from './pages/Article6'
import Teacher1 from './pages/Teacher1'
import Teacher2 from './pages/Teacher2'
import Teacher3 from './pages/Teacher3'
import Teacher4 from './pages/Teacher4'
import Teacher5 from './pages/Teacher5'
import Teacher6 from './pages/Teacher6'
import Teacher from './component/Teacher'
import Book from './component/Book'


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
          <Route path={"/booktoday"} element={<Book />}/>
          <Route path={"/"} element={
            <>
              <Home/>
              <Aliment/>
              {/* <Meditation/> */}
              <Blog/>
            </>
          }/>
        </Routes>
      </Router>
    </>
  )
}

export default App