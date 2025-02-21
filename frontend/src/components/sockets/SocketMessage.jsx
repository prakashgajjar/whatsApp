import React, { useContext, useEffect } from 'react';
import ContextProvider from '../../Hooks/ContextProvider';
import SocketProvider from '../../Hooks/SocketProvider';

const SocketMessage = () => {
    const { socket } = useContext(SocketProvider);
    const { setMessage } = useContext(ContextProvider);

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            setMessage((prevMessages) => [...prevMessages, newMessage]);
        };

        socket.on('newMessage', handleNewMessage);

        return () => {
            socket.off('newMessage', handleNewMessage);
        };
    }, [socket, setMessage]);

    return <div></div>;
};

export default SocketMessage;
