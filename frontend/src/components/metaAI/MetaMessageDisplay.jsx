import React, { useContext, useEffect, useState, useRef } from "react";
import contextProvider from "../../Hooks/ContextProvider";
import Markdown from "react-markdown";
import Emoji from "../cards/Emoji";
const MetaMessageDisplay = () => {
  const { metaMessageText, myMetaMessage ,showEmoji , setShowEmoji } = useContext(contextProvider);
  const [messages, setMessages] = useState([]); // Store chat history
  const lastMessageRef = useRef(null); // For auto-scrolling

  useEffect(() => {
    setMessages((prev) => {
      const newMessages = [...prev];

      if (myMetaMessage && !prev.some(msg => msg.text === myMetaMessage && msg.sender === "user")) {
        newMessages.push({ sender: "user", text: myMetaMessage });
      }
      if (metaMessageText && !prev.some(msg => msg.text === metaMessageText && msg.sender === "bot")) {
        newMessages.push({ sender: "bot", text: metaMessageText });
      }

      return newMessages;
    });
  }, [myMetaMessage, metaMessageText]);

  return (
    <div className="contact flex flex-col h-[826.5px] bg-zinc-800 p-4 overflow-y-auto">
      <div className="flex flex-col space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[75%] ${
              message.sender === "user"
                ? "bg-[#025C4C] text-white self-end ml-auto"
                : "bg-zinc-900 text-white self-start"
            }`}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            <Markdown>{message.text}</Markdown>
            {/* {message.text} */}
          </div>
        ))}
      </div>
      <div className={`z-50 absolute bottom-16 contact ${showEmoji ? "block" : "hidden"}`}>
      <Emoji/>
      </div>
    </div>
  );
};

export default MetaMessageDisplay;
