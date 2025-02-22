import React, { useContext, useEffect } from 'react';
import Icons from './Icons';
import contextProvider from '../../Hooks/ContextProvider';
import axios from 'axios';
import SocketMessage from '../sockets/SocketMessage';

const Input = () => {
    const { 
        setMessage, message, contact, showEmoji, setShowEmoji, 
        selectEmoji, setMessages, selectedId , currentUserId 
    } = useContext(contextProvider);

    const sendMessage = async () => {
        if (!message.trim()) return; // Prevent empty messages

        const newMessage = {
            sender: {_id : currentUserId},
            receiver: contact?._id, 
            content: message,
            isDelivered: false,
            isSeen: false,
            createdAt: new Date().toISOString(),
        };

        // **1️⃣ Add the message to local state immediately**
        setMessages(prevMessages => [...prevMessages, newMessage]);

        try {
            await axios.post(`http://localhost:3000/message/send/${selectedId}`, 
                { message }, { withCredentials: true }
            );
        } catch (error) {
            console.error("Error:", error);
        }

        // **2️⃣ Clear the input field**
        setMessage("");

        // **3️⃣ Send message via WebSocket**
        SocketMessage(newMessage);
    };

    useEffect(() => {
        if (selectEmoji) {
            setMessage(prev => prev + selectEmoji);
        }
    }, [selectEmoji, setMessage]);

    return (
        <div className="bg-zinc-800 flex items-center gap-3 w-full h-16 z-50">
            <div className="flex -space-x-4">
                <div onClick={() => setShowEmoji(!showEmoji)}>
                    <Icons url="/icons/smill1.png" />
                </div>
                <Icons url="/icons/doc.png" />
            </div>
            
            <div className="flex justify-center items-center flex-grow">
                <input 
                    type="text" 
                    className="w-full rounded-md h-10 mb-3 outline-none bg-transparent text-white ml-2"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Type a message" 
                />
            </div>
            
            <div className="flex absolute right-5 justify-center items-center ml-2 -mt-2">
                <img 
                    src="/icons/send.png" 
                    alt="Send" 
                    onClick={() => {
                        setShowEmoji(false);
                        sendMessage();
                    }}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Input;
