import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route,  createBrowserRouter, RouterProvider,createRoutesFromElements  } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'

// const router = createBrowserRouter([
//  {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: 'home', element: <Home /> },
//       { path: 'about', element: <About /> },
//       { path: 'contact', element: <Contact /> },
//       { path: 'user/:userid', element: <User /> }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
