import React, { useState } from 'react'
import Home from './components/main/Home'
import LoginPage from './components/login/LoginPage'
import { Routes, Route } from 'react-router-dom'
import ContextProvider from './Hooks/ContextProvider'
import socketProvider from './Hooks/SocketProvider'
import MetaDisplay from './components/metaAI/MetaDisplay'
import './App.css'
import SocketConnection from './components/sockets/SocketConnection'
import SocketMessage from './components/sockets/SocketMessage'

const App = () => {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([]); //array of message from seved on backend
  const [contact, setContact] = useState([])
  const [selectedId, setSelectedId] = useState("");
  const [currentUserId, setCurrentUser] = useState('')
  const [headerProfile, setHeaderProfile] = useState({}); // that use for when we click contact that show user detail
  const [metaDisplay, setMetaDisplay] = useState(false); // meta true when we click on meta icon and right side display change
  const [metaMessage, setMetaMessage] = useState('');
  const [metaMessageText, setMetaMessageText] = useState('');//meta ai responce store here
  const [myMetaMessage, setMyMetaMessage] = useState('') // my message i send meta is store for display
  const [emoji, setEmoji] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectEmoji, setSelectEmoji] = useState('')

  //socket State start here 

  const [socket, setSocket] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);


  return (
    <>
      <ContextProvider.Provider value={{ setMetaMessage, selectEmoji, setSelectEmoji, setShowEmoji, showEmoji, setEmoji, emoji, setMessages, messages, myMetaMessage, setMyMetaMessage, metaMessage, setMetaMessageText, metaMessageText, contact, setMetaDisplay, metaDisplay, setContact, currentUserId, setCurrentUser, setMessage, message, headerProfile, setHeaderProfile, selectedId, setSelectedId }}>
        <socketProvider.Provider value={{ socket, setSocket, onlineUser, setOnlineUser }}>
        <div className='w-screen h-screen overflow-hidden'>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/meta' element={<MetaDisplay />} />
          </Routes>
        </div>
        <div>
        <SocketConnection />
        <SocketMessage/>
        </div>
        </socketProvider.Provider>
      </ContextProvider.Provider>

    </>
  )
}

export default App