import React from 'react'
import Header from './componets/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
const App = () => {
 
  return (
    <>
      <Header />
      <Outlet/>
      
    </>
  )
}

export default App