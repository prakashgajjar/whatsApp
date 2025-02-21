import React, { useContext, useEffect } from 'react'
import io from 'socket.io-client'
import socketProvider from '../../Hooks/SocketProvider'
import contextProvider from '../../Hooks/ContextProvider'

const SocketConnection = () => {
    const {socket, setSocket, onlineUser, setOnlineUser } = useContext(socketProvider)
    const {currentUserId  , setMessage , message} = useContext(contextProvider);
    const socketConnected = ()=>{
      const socket = io('http://localhost:3000' ,{
        query:{
          userId:currentUserId
        }
      })
      setSocket(socket);
      
      socket.on('getOnlineUser', (user) => {
        setOnlineUser(user)
        console.log('socket disconnected from socketconnection.jsx')
      })
      console.log(currentUserId , "Connected")

        return () => {
            socket.close()
        }
    }

    useEffect(()=>{
      socketConnected()
    },[currentUserId])
  return (
    <div>
    </div>
  )
}

export default SocketConnection