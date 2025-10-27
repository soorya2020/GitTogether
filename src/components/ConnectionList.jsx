import React from "react";

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
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 last:border-none hover:bg-base-200 rounded-lg transition-all"
    >
      {/* Left section: index + image + name */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Index */}
        <div className="text-2xl font-thin opacity-30 w-6 text-center">
          {index + 1}
        </div>

        {/* Profile Image */}
        <img
          className="size-12 sm:size-10 rounded-full object-cover "
          src={profileUrl}
          alt={firstName}
        />

        {/* Name + Details */}
        <div className="truncate">
          <div className="font-semibold text-base leading-tight">
            {firstName + " " + lastName}
          </div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {age + " " + gender}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-start sm:justify-end gap-2 mt-2 sm:mt-0">
        {showButtons ? (
          <div className="w-full flex justify-around sm:justify-end gap-2">
            <button
              className="btn btn-xs sm:btn-sm flex items-center gap-1"
              onClick={() => handleClick("rejected", id)}
            >
              <svg
                className="h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="hidden sm:inline">Reject</span>
            </button>

            <button
              className="btn btn-xs sm:btn-sm flex items-center gap-1"
              onClick={() => handleClick("accepted", id)}
            >
              <svg
                className="h-5 w-5 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="hidden sm:inline">Accept</span>
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-around sm:justify-end gap-2">
            <button
              className="btn btn-xs sm:btn-sm btn-success"
              onClick={() => handleClick("chat", id)}
            >
              Chat
            </button>
            <button
              className="btn btn-xs sm:btn-sm btn-error"
              onClick={() => handleClick("block", id)}
            >
              Block
            </button>
            <button
              className="btn btn-xs sm:btn-sm btn-primary"
              onClick={() => handleClick("report", id)}
            >
              Report
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ConnectionList;
