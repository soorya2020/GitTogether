import React from 'react'

const Logo = () => {
  return (
    <>
          {/* ICON */}
          <div className="bg-primary text-primary-content p-1.5 rounded-lg rotate-[-10deg] shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 8-4 4 4 4" />
              <path d="m17 8 4 4-4 4" />
              <path d="M14 4l-4 16" />
            </svg>
          </div>

          {/* TEXT */}
          <span className="text-2xl font-black tracking-tighter">
            Git<span className="text-primary">Together</span>
          </span>
    </>
       
  )
}

export default Logo