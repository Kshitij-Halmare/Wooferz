import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function Layout({children}) {
  return (
    <>
    <div className='bg-gradient-to-br from-amber-200 via-amber-50 to-amber-200 h-screen w-full'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    </>
  )
}

export default Layout