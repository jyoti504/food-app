import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './page/Home'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
 <div>
  <Home/>
    <ToastContainer />
 </div>
  )
}

export default App
