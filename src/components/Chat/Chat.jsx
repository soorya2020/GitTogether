import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Message from "./Message";
import { createSocketConnection } from "../../utils/socket";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import Loading from "../Loading";
const Chat = () => {
  const { toUserId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [recieverData, setRecieverData] = useState(null);
  const chatContainerRef = useRef(null);
  const user = useSelector((store) => store.userReducer?.user);
  const { _id: userId, firstName } = user || "";

  useEffect(() => {
    fetchRecieverDetails();
    fetchMessage();

    if (userId && toUserId) {
      const socket = createSocketConnection();

      socket.emit("joinChat", { userId, toUserId });

      socket.on("messageRecieved", ({ senderId, firstName, text }) => {
        setMessages((prevState) => [
          ...prevState,
          { senderId, text, firstName },
        ]);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [userId, toUserId, messages]);

  const fetchRecieverDetails = async () => {
    try {
      const response = await axios.get(
        BASE_URL + "/chat/targetUser/" + toUserId,
        {
          withCredentials: true,
        }
      );

      setRecieverData(response.data.data);
    } catch (error) {}
  };

  const fetchMessage = async () => {
    if (messages.length === 0) {
      try {
        const response = await axios.get(
          BASE_URL + "/chat/" + toUserId,

          { withCredentials: true }
        );

        const chatMessages = response?.data?.data?.messages.map((msg) => {
          const { senderId, text, createdAt } = msg;
          return {
            senderId: senderId._id,
            firstName: senderId.firstName,
            text,
            createdAt,
          };
        });

        setMessages(chatMessages);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const sendMessage = () => {
    if (newMessage.trim().length === 0) return;
    setNewMessage("");
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName,
      userId,
      toUserId,
      text: newMessage,
    });
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  if (!recieverData) return <Loading />;

  return (
    <div className="flex justify-center items-center py-8 px-4 bg-base-200 ">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl flex flex-col h-[80vh] relative">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-base-300">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={recieverData.profileUrl} alt="User Avatar" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg">
              {recieverData.firstName + " " + recieverData.lastName}
            </h2>
            <p className="text-sm text-success">● Online</p>
          </div>
        </div>

        {/* Chat Area */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto no-scrollbar "
        >
          <Message messages={messages || []} />
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
