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
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 px-6 md:px-12 min-h-[80vh] bg-base-100">
      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-base-content/70 leading-relaxed">
          {message}
        </p>

        <div className="pt-4">
          <Link
            to={link}
            className="btn btn-primary btn-md sm:btn-lg transition-all duration-200 hover:scale-105"
          >
            {buttonText}
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end">
        <img
          src={image}
          alt="Empty state illustration"
          className="w-64 sm:w-80 md:w-[400px] object-contain drop-shadow-md"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default EmptyState;
