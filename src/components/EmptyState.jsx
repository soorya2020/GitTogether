import React from "react";
import { Link } from "react-router";

const EmptyState = ({ title, message, buttonText, link }) => {
  return (
    <div className="hero bg-base-100 mt-40">
      <div className="hero-content text-center min-h-10/12">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{message}</p>
          <button className="btn btn-primary">
            {" "}
            <Link to={link}>{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
