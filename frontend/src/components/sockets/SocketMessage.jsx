import React, { useContext, useEffect } from 'react';
import ContextProvider from '../../Hooks/ContextProvider';
import SocketProvider from '../../Hooks/SocketProvider';

const SocketMessage = () => {
    const { socket } = useContext(SocketProvider);
    const { setMessage, setMessages } = useContext(ContextProvider);

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            console.log("New message received:", newMessage); // Debug message format
        
            // Ensure newMessage is valid before updating state
            if (newMessage && newMessage.content) {
                setMessages((prevMessages) => [...prevMessages, newMessage]); 
            } else {
                console.error("Invalid message format:", newMessage);
            }
        };
        socket.on('newMessage', handleNewMessage);

        return () => {
            socket.off('newMessage', handleNewMessage);
        };
    }, [socket, setMessage, setMessages]);

    return <div></div>;
};

export default SocketMessage;
