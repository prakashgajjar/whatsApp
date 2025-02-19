import React, { useContext, useEffect, useState, useRef } from "react";
import HeaderProfile from "../cards/HeaderProfile";
import contextProvider from "../../Hooks/ContextProvider";
import axios from "axios";

const ChatMain = () => {
  const { selectedId, currentUserId } = useContext(contextProvider); // Get logged-in user ID
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  // Fetch chat messages
  const getAllChat = async () => {
    if (!selectedId) return;
    try {
      const response = await axios.get(`http://localhost:3000/message/get/${selectedId}`, {
        withCredentials: true,
      });
      setMessages(response.data); // Assuming response.data is an array of messages
    } catch (error) {
      console.error("Error fetching chat:", error);
    }
  };

  useEffect(() => {
    getAllChat();
  }, [selectedId]);

  return (
    <div className="flex flex-col h-[826.5px] bg-zinc-800 p-4">
      <div className="flex-1 overflow-y-auto space-y-3">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === currentUserId
                  ? "bg-[#025C4C] text-white ml-auto" // Sent message (right side)
                  : "bg-zinc-900 text-white mr-auto" // Received message (left side)
              }`}
            >
              {msg.content}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No messages yet...</p>
        )}
        <div ref={chatEndRef}></div>
      </div>
    </div>
  );
};

export default ChatMain;
