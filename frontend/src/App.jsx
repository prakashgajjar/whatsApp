import React from 'react'
import Home from './components/main/Home'
import './App.css'
import io from 'socket.io-client'

const socket = io('http://localhost:3000');

const App = () => {
  return (
    <>
      <div className='w-screen h-screen overflow-hidden'>
        <Home/>
      </div>
    </>
  )
}

export default App