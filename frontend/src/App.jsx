import React, { useState } from 'react'
import Home from './components/main/Home'
import LoginPage from './components/login/LoginPage'
import {Routes , Route} from 'react-router-dom'
import ContextProvider from './Hooks/ContextProvider'
import MetaDisplay from './components/metaAI/MetaDisplay'
import './App.css'
import io from 'socket.io-client'

// const socket = io('http://localhost:3000');

const App = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([]); //array of message from seved on backend
  const[contact , setContact] = useState([])
  const[selectedId , setSelectedId] = useState("");
  const[currentUserId , setCurrentUser] = useState('')
  const[headerProfile , setHeaderProfile] = useState({}); // that use for when we click contact that show user detail
  const[metaDisplay , setMetaDisplay] = useState(false); // meta true when we click on meta icon and right side display change
  const[metaMessage , setMetaMessage] = useState('');
  const[metaMessageText , setMetaMessageText] = useState('');//meta ai responce store here
  const[myMetaMessage , setMyMetaMessage] = useState('') // my message i send meta is store for display
  const[emoji , setEmoji] = useState([]);
  const[showEmoji , setShowEmoji] = useState(false);
  const[selectEmoji , setSelectEmoji] = useState('')
  
  return (
    <>
 <ContextProvider.Provider value={{setMetaMessage ,selectEmoji , setSelectEmoji ,setShowEmoji , showEmoji , setEmoji ,emoji , setMessages , messages , myMetaMessage , setMyMetaMessage , metaMessage, setMetaMessageText , metaMessageText , contact , setMetaDisplay , metaDisplay , setContact , currentUserId , setCurrentUser , setMessage ,message , headerProfile ,setHeaderProfile ,selectedId, setSelectedId }}>
 <div className='w-screen h-screen overflow-hidden'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/meta' element={<MetaDisplay />} />
        </Routes>
      </div>
 </ContextProvider.Provider>
  
    </>
  )
}

export default App