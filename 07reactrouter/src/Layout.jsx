import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>   
        <Footer/>
    </>
    // outlet use hota h jisse baaki cheeze wahi rhe or apn sirf outlet me changes kar ske for ex
    // in this case header and footer wahi rahenge unke beech ka change hoga
  )
}

export default Layout