import React from 'react'
import {Route, Routes } from 'react-router-dom'

import Footer from './Pages/components/Footer'
import Header from './Pages/components/Header'

import Home from './Pages/Home'
import About from './Pages/About';
import Project from './Pages/Projects'

// import Contact from './pages/Contact'
// 
// import NoPage from './pages/NoPage'

// import Skill from './pages/Skill'


const App = () => {
    return (
      <>
      <div>
        <Header/>
        <div className='my-16'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/project' element={<Project/>}/>
            {/* <Route path='/skill' element={<Skill/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NoPage/>}/> */}
          </Routes>
        </div>
      </div>
      <Footer/>
      </>
      
    )
}

export default App