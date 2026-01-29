import React from "react";
import { MessageCircle, Ban, Flag } from "lucide-react";

const ConnectionList = ({
  firstName,
  lastName,
  age,
  gender,
  profileUrl,
  id,
  index,
  showButtons,
  handleClick,
}) => {
  return (
    <li
      key={id}
      className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 my-3 border border-base-content/5 bg-base-100 hover:border-primary/50 hover:shadow-md rounded-2xl transition-all duration-200 group"
    >
      {/* Left section: index + image + name */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Index - Subtle and small */}
        <span className="hidden sm:block text-xs font-black opacity-20 group-hover:opacity-100 transition-opacity">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Profile Image with Ring */}
        <div className="avatar">
          <div className="size-12 rounded-full ring ring-base-content/5 group-hover:ring-primary/30 ring-offset-base-100 ring-offset-2">
            <img src={profileUrl} alt={firstName} className="object-cover" />
          </div>
        </div>

        {/* Name + Details */}
        <div className="truncate">
          <div className="font-black text-lg tracking-tight leading-tight">
            {firstName} {lastName || ""}
          </div>
          <div className="text-[10px] uppercase font-mono font-bold tracking-widest opacity-50 flex gap-2 items-center">
            <span className="text-primary">●</span> {gender || "Dev"}{" "}
            <span className="opacity-20">|</span> {age ? `${age} yrs` : "N/A"}
          </div>
        </div>
      </div>

      {/* Right section: Buttons */}
      <div className="flex items-center justify-end gap-2 mt-3 sm:mt-0">
        {showButtons ? (
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              className="btn btn-sm btn-ghost hover:bg-red-50 text-red-500 flex-1 sm:flex-none"
              onClick={() => handleClick("rejected", id)}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="hidden lg:inline">Reject</span>
            </button>

            <button
              className="btn btn-sm btn-primary px-6 shadow-sm flex-1 sm:flex-none font-bold"
              onClick={() => handleClick("accepted", id)}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="hidden lg:inline">Accept</span>
            </button>
          </div>
        ) : (
          <div className="flex gap-1">
            {/* Chat - The Primary Post-Connect Action */}
            <button
              className="btn btn-sm btn-circle btn-ghost text-success hover:bg-success/10"
              onClick={() => handleClick("chat", id)}
              title="Send Message"
            >
              <MessageCircle size={18} />
            </button>

            {/* Secondary Actions in a tiny group */}
            <div className="flex bg-base-200 rounded-full p-1">
              <button
                className="btn btn-xs btn-circle btn-ghost text-error"
                onClick={() => handleClick("block", id)}
                title="Block"
              >
                <Ban size={14} />
              </button>
              <button
                className="btn btn-xs btn-circle btn-ghost opacity-50 hover:opacity-100"
                onClick={() => handleClick("report", id)}
                title="Report"
              >
                <Flag size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default ConnectionList;
