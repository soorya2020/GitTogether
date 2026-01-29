import React from "react";
import { Link } from "react-router";

const EmptyState = ({
  title = "Nothing here yet!",
  message = "Looks like there's no data to show right now. Start exploring or add something new.",
  buttonText = "Go Back",
  link = "/",
  image = "https://illustrations.popsy.co/gray/success.svg", // nice default empty state illustration
}) => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 px-6 md:px-12 min-h-[85vh] bg-base-100 overflow-hidden">
      {/* DECORATIVE BACKGROUND - Gives it a "Code Editor" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] leading-none select-none">
        {Array(50).fill("git checkout -b new-connections; ").join("")}
      </div>

      {/* Text Section */}
      <div className="max-w-md text-center md:text-left z-10">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
          Status: 404 Visualized
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-base-content leading-none italic uppercase tracking-tighter mb-6">
          {title}
        </h1>

        <p className="text-lg text-base-content/60 leading-relaxed mb-8">
          {message}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to={link}
            className="btn btn-primary btn-lg rounded-2xl shadow-[0_10px_20px_-10px_rgba(var(--p),0.5)] font-black italic px-8 transition-all hover:-translate-y-1"
          >
            {buttonText}
          </Link>

          {/* Added a secondary "Support" action to make it look full */}
          {/* <button className="btn btn-ghost btn-lg rounded-2xl opacity-50 font-bold italic">
            Documentation
          </button> */}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative group">
        {/* Decorative Glow behind image */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500"></div>

        <div className="relative border-4 border-base-200 rounded-[3rem] p-8 bg-base-100 shadow-inner">
          <img
            src={image}
            alt="Empty state"
            className="w-56 sm:w-72 md:w-[320px] lg:w-[380px] object-contain 
             brightness-150 saturate-200 sepia-[.5] hue-rotate-[15deg] 
             drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]
             transition-transform duration-700 group-hover:rotate-3 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default EmptyState;
