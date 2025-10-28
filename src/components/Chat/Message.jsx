import React from "react";
import { useSelector } from "react-redux";

const Message = ({ messages }) => {
  const { _id:currentUserId } = useSelector((store) => store?.userReducer?.user) || "";

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index} className="flex-1  p-1">
          <div
            className={`chat chat-${
              message.senderId === currentUserId ? "end" : "start"
            }`}
          >
            <div className="chat-header">
              {message.firstName}
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div
              className={`chat-bubble ${
                message.senderId !== currentUserId ? "chat-bubble-primary" : ""
              }`}
            >
              <p className=" text-sm">{message.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
