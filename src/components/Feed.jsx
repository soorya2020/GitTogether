import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeeds, removeUserFromFeeds } from "../store/feedSlice";
import UserCard from "../components/UserCard";
import EmptyState from "./EmptyState";
import About from "./About";
import { API } from "../utils/axios";

function Feed() {
  const feeds = useSelector((store) => store.feedsReducer.feeds);
  const [loading, setLoading] = useState({ status: "", loading: false });

  const dispatch = useDispatch();

  const fetchFeeds = async () => {
    if (feeds) return;
    try {
      const response = await API.get("/user/feeds");
      dispatch(addFeeds(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusChange = async (status, userId) => {
    try {
      setLoading({ status: status, loading: true });
      const response = await API.post("/request/send/" + status + "/" + userId);
      setLoading({ status: status, loading: false });
      dispatch(removeUserFromFeeds(userId));
    } catch (error) {
      setLoading({ status: status, loading: false });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  if (feeds && feeds.length === 0)
    return (
      <EmptyState
        title={"That’s All for Now 👋"}
        message={"Come back later for fresh content from your connections."}
        buttonText={"Go to Connections"}
        link={"/connections"}
      />
    );

  return (
    feeds && (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        {/* Header: Reduced bottom padding, added subtle top margin */}
        <header className="text-center mb-4">
          <h1 className="text-sm md:text-base font-bold opacity-40 uppercase tracking-[0.2em]">
            Your Feeds
          </h1>
          {/* Optional: About can go here if it's a small subtitle */}
          {/* <About /> */}
        </header>

        {/* Card Container */}
        <div className="w-full max-w-sm flex flex-col items-center animate-in fade-in zoom-in duration-300">
          <UserCard
            user={feeds[0]}
            handleClick={handleStatusChange}
            loading={loading}
          />
        </div>
      </div>
    )
  );
}

export default Feed;
