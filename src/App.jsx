import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/Hero'
import './index.css'
import About from './components/About'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='bg-gradient-to-br from-[#000] to-[#232526] text-white'>
      <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      
      
    </div>
  )
}

export default App



// bg-gradient-to-br from-[#232526] to-[#414345]