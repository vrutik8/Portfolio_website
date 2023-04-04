import React from 'react'
// import AppLayout from "./components"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Footer from "./components/Footer"
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <Body/>
    <Footer/>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
    path:"/about",
    element:<About/>
  }
])



export default AppLayout;