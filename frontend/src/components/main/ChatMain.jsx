import React, { useContext, useEffect, useState, useRef } from "react";
import HeaderProfile from "../cards/HeaderProfile";
import contextProvider from "../../Hooks/ContextProvider";
import axios from "axios";
import Emoji from "../cards/Emoji";

const ChatMain = () => {
  const { selectedId, showEmoji,  currentUserId , messages , setMessages } = useContext(contextProvider);
  
  const chatEndRef = useRef(null);

  const getAllChat = async () => {
    if (!selectedId) return;
    try {
      const response = await axios.get(`http://localhost:3000/message/get/${selectedId}`, {
        withCredentials: true,
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching chat:", error);
    }
  };

  useEffect(() => {
    getAllChat();
  }, [selectedId]);

  return (
    <div className="flex flex-col h-[826.5px] bg-zinc-800 p-4">
      <div className="flex-1  overflow-y-auto space-y-3">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${msg.sender._id === currentUserId
                ? "bg-[#025C4C] text-white ml-auto" // Sent message
                : "bg-zinc-900 text-white mr-auto" // Received message
                }`}
            >
              <div className="flex justify-between">
                <h1>{msg.content}</h1>
                <p className="text-xs font-semibold text-gray-300 mt-2">
                  {new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
                </p>

              </div>

            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No messages yet...</p>
        )}
        <div ref={chatEndRef}></div>
      </div>
      <div className={`z-50 absolute bottom-16 contact ${showEmoji ? "block" : "hidden"}`}>
      <Emoji/>
      </div>
    </div>
  );
};

export default ChatMain;
