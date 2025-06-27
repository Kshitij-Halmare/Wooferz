import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import OurTeam from './Pages/OurTeam'
import VolunteerPage from './Pages/VolunteerPage'
import Founder from './Pages/Founder'
import Register from './Components/Register'
import Signin from './Components/Signin'
import Donate from './Pages/Donate'
import EditorPage from './Editor/EditorPage.jsx'
import CommunityHome from './Editor/CommunityHome.jsx'
import BlogId from './Editor/BlogId.jsx'
import AdoptDogsPage from './Components/AdoptDogsPage.jsx'
import AddDogForm from './Components/AdoptForm.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route 
          path='/donate' 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Donate />
            </Suspense>
          } 
        />
        <Route path='/ourTeam' element={<OurTeam />} />
        <Route path='/volunteer' element={<VolunteerPage />} />
        <Route path='/founder' element={<Founder />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/community' element={<CommunityHome />} />
        <Route path='/blog/:id' element={<BlogId />} />
      </Route>
      <Route path='/editor' element={<EditorPage />} />  
      <Route path='/adopt' element={<AdoptDogsPage/>}/>
      <Route path='/adopt-form' element={<AddDogForm/>}/>
    </Routes>
  );
}

export default App;
