import React, { useContext, useEffect, useRef, useCallback, useState } from "react";
import ContextProvider from "../../Hooks/ContextProvider";
import axios from "axios";
import Emoji from "../cards/Emoji";
import socketProvider from "../../Hooks/SocketProvider";

const ChatMain = () => {
  const { selectedId, showEmoji, currentUserId, messages, setMessages } = useContext(ContextProvider);
  const { socket } = useContext(socketProvider);
  const chatEndRef = useRef(null);
  const [messageText, setMessageText] = useState(""); // Track input message

  // Fetch chat messages when user selects a chat
  const getAllChat = useCallback(async () => {
    if (!selectedId) return;
    try {
      const response = await axios.get(`http://localhost:3000/message/get/${selectedId}`, {
        withCredentials: true,
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching chat:", error);
    }
  }, [selectedId, setMessages]);

  useEffect(() => {
    getAllChat();
  }, [selectedId, getAllChat]);

  // 📌 Listen for incoming messages from the socket
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      console.log("Received message:", newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Update messages state
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, setMessages]);

  // 📌 Send Message Function
  const sendMessage = async () => {
    if (!messageText.trim()) return; // Prevent sending empty messages

    const newMessage = {
      _id: Date.now().toString(), // Temporary ID
      sender: { _id: currentUserId },
      receiver: selectedId,
      content: messageText,
      createdAt: new Date().toISOString(),
      messageType: "text",
      isDelivered: false,
      isSeen: false,
    };

    // 1️⃣ Add Message Instantly to UI
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessageText(""); // Clear input field

    // 2️⃣ Emit Message to Socket Server
    socket.emit("sendMessage", newMessage);

    try {
      const response = await axios.post(
        "http://localhost:3000/message/send",
        { receiver: selectedId, content: messageText },
        { withCredentials: true }
      );

      if (response.data) {
        console.log("Message sent successfully:", response.data);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="contact flex flex-col h-[826.5px] bg-zinc-800 p-4">
      <div className="contact flex-1 overflow-y-auto space-y-3">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender._id === currentUserId ? "bg-[#025C4C] text-white ml-auto" : "bg-zinc-900 text-white mr-auto"
              }`}
            >
              <div className="flex justify-between">
                <h1>{msg.content}</h1>
                <p className="text-xs font-semibold text-gray-300 mt-2">
                  {new Date(msg.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
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
        <Emoji />
      </div>
</div>
  );
}

export default ChatMain;
