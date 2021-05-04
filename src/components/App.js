import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'


function App(props) {
  return (
    <div id="main">
      <Navbar /> 
      <About /> 
      <Projects />
    </div>
  )
}

export default App

