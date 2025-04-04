import React from 'react'
import { CssBaseline } from '@mui/material'
import Navbar from './component/Navbar'
import Introduce from './component/Introduce'
import About from './component/AboutMe'
import Capabilities from './component/Capabilities'
import Image from './component/Image'
import Experience from './component/Experience'
import Connect from './component/Connect'

function App() {
  return (
   <>
   <CssBaseline/>
    <Navbar/>
    <Introduce/>
    <About/>
    <Image/>
    <Capabilities/>
    <Experience/>
    <Connect/>
  
   </>
  )
}

export default App