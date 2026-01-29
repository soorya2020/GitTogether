import React from "react";
import Loading from "../Loading";
import MessageStatus from "./MessageStatus";

const Message = ({ messages, currentUserId }) => {

  if (!currentUserId) return <Loading />;

  return (
   <div className="flex flex-col w-full pb-4">
  {messages.map((message, index) => {
    const isMe = message.senderId.toString() === currentUserId.toString();
    const showDateDivider = index === 0 || 
      new Date(messages[index].createdAt).toDateString() !== new Date(messages[index - 1].createdAt).toDateString();

    return (
      <React.Fragment key={message._id || index}>
        {showDateDivider && (
          <div className="divider text-[10px] opacity-40 my-4">
            {new Date(message.createdAt).toDateString()}
          </div>
        )}

        <div className={`chat ${isMe ? "chat-end" : "chat-start"} mb-1`}>
          <div className={`chat-bubble max-w-[85%] ${!isMe ? "bg-secondary  text-black" : "bg-base-200 text-base-content"}`}>
            
            {/* Simple Flex Container to align everything */}
            <div className="flex flex-wrap items-end justify-end gap-2">
              
              <p className="flex-1 text-[15px] leading-snug break-words">
                {message.text}
              </p>

              <div className="flex items-center gap-1 shrink-0 mb-[-2px]">
                <time className="text-[10px] opacity-70 uppercase">
                  {new Date(message.createdAt).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </time>
                {isMe && <MessageStatus status={message.status} />}
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  })}
</div>
  );
};

export default Message;
