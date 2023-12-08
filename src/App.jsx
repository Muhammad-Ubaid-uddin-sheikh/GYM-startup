import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/pages/Navbar'
import Slider from './components/animation/Slider'
import Motion from './components/animation/Motion'
import { Box } from '@mui/material'
function App() {
 

  return (
    <>
    <BrowserRouter>
      <div className='mainDiv'>
        <div className="sub-div">
          <Box width=''>
          <Navbar/>
          <Slider/>
          <Motion/>
<h1  className="checking text-sm md:text-2xl lg:text-3xl  bg-pink-800 align-middle text-center font-bold text-white uppercase ">hello world</h1>
</Box>
       </div>
       </div>
       </BrowserRouter>
    </>
  )
}

export default App
