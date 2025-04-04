import React from 'react'
import { CssBaseline } from '@mui/material'
import Navbar from './component/navbar'
import Introduce from './component/introduce'
import About from './component/about'
import Capabilities from './component/capabilities'
import Image from './component/Image'
import Experience from './component/experience'
import Connect from './component/connect'

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