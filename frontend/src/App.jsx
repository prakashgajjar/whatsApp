import React, { useState } from 'react'
import Home from './components/main/Home'
import LoginPage from './components/login/LoginPage'
import {Routes , Route} from 'react-router-dom'
import ContextProvider from './Hooks/ContextProvider'
import './App.css'
import io from 'socket.io-client'

// const socket = io('http://localhost:3000');

const App = () => {
  const [message, setMessage] = useState('')
  const[contact , setContact] = useState([])
  const[selectedId , setSelectedId] = useState("");
  const[currentUserId , setCurrentUser] = useState('')
  const[headerProfile , setHeaderProfile] = useState({}); // that use for when we click contact that show user detail

  // socket.on('message', (data) => {
  //   console.log('Received message:', data);
  //   // setContact((prev) => [...prev, data]);
  // });

  // const sendMessageToUser = ()=>{
  //   // socket.emit('userMessage', message)
  // }
  
  return (
    <>
 <ContextProvider.Provider value={{contact , setContact , currentUserId , setCurrentUser , setMessage ,message , headerProfile ,setHeaderProfile ,selectedId, setSelectedId }}>
 <div className='w-screen h-screen overflow-hidden'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
 </ContextProvider.Provider>
  
    </>
  )
}

export default App