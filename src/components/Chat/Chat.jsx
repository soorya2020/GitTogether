import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Message from "./Message";
import { createSocketConnection } from "../../utils/socket";
import { useSelector } from "react-redux";
const Chat = () => {
  const { toUserId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  const user = useSelector((store) => store.userReducer?.user);
  const { _id: userId, firstName } = user || "";
  useEffect(() => {
    if (userId && toUserId) {
      const socket = createSocketConnection();

      socket.emit("joinChat", { userId, toUserId });

      socket.on("messageRecieved", ({ firstName, text }) => {
        console.log("ss");

        setMessages((prevMessages) => [...prevMessages, { text, firstName }]);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [userId, toUserId]);

  const sendMessage = () => {
    if (newMessage.trim().length === 0) return;
    setNewMessage("");
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName,
      userId,
      toUserId,
      message: newMessage,
    });
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center py-8 px-4 bg-base-200 ">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl flex flex-col h-[80vh] relative">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-base-300">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User Avatar"
              />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg">{firstName}</h2>
            <p className="text-sm text-success">● Online</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto  ">
          <Message messages={messages} />
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-base-300 flex gap-2">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            type="text"
            placeholder="Type your message..."
            className="input input-bordered input-sm flex-1"
          />
          <button onClick={sendMessage} className="btn btn-primary btn-sm px-4">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
