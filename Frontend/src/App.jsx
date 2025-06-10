import React from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import OurTeam from './Pages/OurTeam'
import VolunteerPage from './Pages/VolunteerPage'
import Founder from './Pages/Founder'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/ourTeam' element={<OurTeam/>}/>
        <Route path='/volunteer' element={<VolunteerPage/>}/>
        <Route path='/founder' element={<Founder />} />
      </Route>
    </Routes>
  )
}

export default App
