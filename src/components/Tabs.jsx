import React from "react";
import { Link } from "react-router";

const Tabs = () => {
  return (
    <div
      role="tablist"
      className="tabs w-full bg-base-200 justify-around fixed bottom-0 sm:hidden"
    >
      <Link
        to="/connections"
        role="tab"
        className="tab font-bold flex-1 text-center sm:flex-none my-3"
      >
        Connections
      </Link>

      <Link
        to="/feeds"
        role="tab"
        className="tab font-bold flex-1 text-center sm:flex-none my-3"
      >
        Feeds
      </Link>

      <Link
        to="/requests"
        role="tab"
        className="tab font-bold flex-1 text-center sm:flex-none my-3"
      >
        Request
      </Link>
    </div>
  );
};

export default Tabs;
