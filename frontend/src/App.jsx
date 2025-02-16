import React from 'react'
import Home from './components/main/Home'
import LoginPage from './components/login/LoginPage'
import {Router , Routes , Route} from 'react-router-dom'
import './App.css'
import io from 'socket.io-client'

const socket = io('http://localhost:3000');

const App = () => {
  return (
    <>
  
   <div className='w-screen h-screen overflow-hidden'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
  
    </>
  )
}

export default App