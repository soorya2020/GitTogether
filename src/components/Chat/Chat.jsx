import React, { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { createSocketConnection } from "../../utils/socket";
import { API } from "../../utils/axios";
import Message from "./Message";
import Loading from "../Loading";

const Chat = () => {
  const { toUserId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [recieverData, setRecieverData] = useState(null);
  const chatContainerRef = useRef(null);
  const socketRef = useRef(null);

  const user = useSelector((store) => store.userReducer?.user);
  const userId = user?._id;
  const firstName = user?.firstName;

  // Optimized Fetcher
  const loadChatData = useCallback(async () => {
    try {
      const [userRes, msgRes] = await Promise.all([
        API.get(`/chat/targetUser/${toUserId}`),
        API.get(`/chat/${toUserId}`),
      ]);

      setRecieverData(userRes.data.data);

      const formattedMsgs = msgRes?.data?.data?.messages.map((msg) => ({
        _id: msg._id,
        senderId: msg.senderId._id,
        firstName: msg.senderId.firstName,
        text: msg.text,
        createdAt: msg.createdAt,
        status: msg.status || "sent",
      }));
      setMessages(formattedMsgs);

      // Tell server we've seen these loaded messages
      if (socketRef.current) {
        socketRef.current.emit("markAsSeen", {
          senderId: toUserId,
          receiverId: userId,
        });
      }
    } catch (err) {
      console.error("Failed to load chat", err);
    }
  }, [toUserId, userId]);

  useEffect(() => {
    loadChatData();
  }, [loadChatData]);

  
  useEffect(() => {
    if (!userId || !toUserId) return;

    socketRef.current = createSocketConnection();
    const socket = socketRef.current;

    socket.emit("joinChat", { userId, toUserId });//creates the room when chat is open

    socket.on("messageSentAck", ({ _id, status, text }) => { //listen to messagesent acknowledge
      setMessages((prev) =>
        prev.map((msg) =>
          msg.status === "sent" && msg.text === text
            ? { ...msg, _id, status }
            : msg,
        ),
      );
    });

    socket.on("messageReceived", (msg) => { //listen to incoming message
      if (msg.senderId !== userId) {
        setMessages((prev) => [...prev, { ...msg, status: "received" }]);
        socket.emit("markAsSeen", {
          senderId: msg.senderId,
          receiverId: userId,
        });
      }
    });

    socket.on("statusUpdate", ({ status }) => {
      setMessages((prev) =>
        prev.map((m) =>
          m.senderId === userId && m.status !== "seen"
            ? { ...m, status: "seen" }
            : m,
        ),
      );
    });

    return () => {
      socket.off("messageSentAck");
      socket.off("messageReceived");
      socket.off("statusUpdate");
      socket.disconnect();
    };
  }, [userId, toUserId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const msgPayload = {
      firstName,
      userId,
      toUserId,
      text: newMessage,
      status: "sent",
      senderId: userId,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, msgPayload]);
    socketRef.current.emit("sendMessage", msgPayload);
    setNewMessage("");
  };

  // Scroll to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!recieverData) return <Loading />;

  return (
    <div className="flex justify-center items-center h-[100dvh] bg-base-300 p-0 md:p-4 pb-16 md:pb-30">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl flex flex-col h-full max-h-full overflow-hidden">
        {" "}
        {/* Header */}
        <div className="flex items-center gap-3 p-3 border-b border-base-300 bg-base-100 z-10">
          {" "}
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={recieverData.profileUrl} alt="Avatar" />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-sm md:text-base">
              {recieverData.firstName}
            </h2>
            <p className="text-[10px] text-success font-medium">Online</p>
          </div>
        </div>
        {/* Chat Area with Pattern */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 no-scrollbar"
          style={{
            backgroundColor: "#2b2826", // Instant fallback color
            backgroundImage: `linear-gradient(rgba(229, 221, 213, 0.8), rgba(229, 221, 213, 0.8)), url("https://st.depositphotos.com/1298561/4896/v/950/depositphotos_48968489-stock-illustration-doodle-communication-pattern.jpg")`,
            backgroundSize: "300px",
            backgroundRepeat: "repeat",
            backgroundAttachment: "local", // Improves scroll performance
          }}
        >
          <Message messages={messages} currentUserId={userId} />
        </div>
        {/* Input */}
        <div className="p-3 bg-base-100 border-t flex gap-2 items-center">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="input input-bordered input-md flex-1 rounded-full px-4"
            placeholder="Type a message..."
          />
          <button onClick={sendMessage} className="btn btn-primary btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
//:TODO - need to add typing... when user start typing
export default Chat;
