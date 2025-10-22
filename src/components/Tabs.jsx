import React from "react";

const Tabs = () => {
  return (
    <div
      role="tablist"
      className="  tabs w-full bg-base-200 justify-around  sm:hidden"
    >
      <a
        role="tab"
        className="tab font-bold flex-1 text-center sm:flex-none my-3"
      >
        Connections
      </a>
      <a
        role="tab"
        className="tab font-bold  flex-1 text-center sm:flex-none my-3"
      >
        Feeds
      </a>
      <a
        role="tab"
        className="tab font-bold flex-1 text-center sm:flex-none my-3"
      >
        Request
      </a>
    </div>
  );
};

export default Tabs;
