import React from "react";
import { useSelector } from "react-redux";

const Message = ({ messages }) => {
  const { firstName } = useSelector((store) => store?.userReducer?.user) || "";

  return (
    <>
      {messages.map((message) => (
        <div className="flex-1  p-1">
          <div
            className={`chat chat-${
              message.firstName === firstName ? "end" : "start"
            }`}
          >
            <div
              className={`chat-bubble ${
                message.firstName !== firstName ? "chat-bubble-primary" : ""
              }`}
            >
              <p className=" text-sm">{message.text}</p>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}

      {/* <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-base-200">
      <div className="chat chat-start">
        <div className="chat-bubble">Hey! How’s your project going?</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-primary">
          Pretty good! Just integrated the Razorpay payments.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          Nice! Let’s deploy it together once it’s stable.
        </div>
      </div> */}
    </>
  );
};

export default Message;
