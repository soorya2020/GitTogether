import React from "react";
import { useSelector } from "react-redux";

const Message = ({ messages }) => {
  const { _id: currentUserId } =
    useSelector((store) => store?.userReducer?.user) || "";

  return (
    <div>
      {messages.map((message, index) => {
        return (
          <div key={index} className="flex-1  p-1">
            <div
              className={`chat ${
                message.senderId === currentUserId ? "chat-end" : "chat-start"
              }`}
            >
              <div className="chat-header">
                {message.firstName}
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div
                className={`chat-bubble ${
                  message.senderId.toString() !== currentUserId
                    ? "chat-bubble-primary"
                    : ""
                }`}
              >
                <p className=" text-sm">{message.text}</p>
              </div>
            </div>
          </div>
        );
      })}
      {/* Hidden element to prevent purge */}
      <div className="hidden">
        chat-start chat-end chat-bubble chat-bubble-primary
      </div>
    </div>
  );
};

export default Message;
