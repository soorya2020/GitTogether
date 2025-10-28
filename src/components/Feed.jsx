import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeeds, removeUserFromFeeds } from "../store/feedSlice";
import UserCard from "../components/UserCard";
import EmptyState from "./EmptyState";
import About from "./About";

function Feed() {
  const feeds = useSelector((store) => store.feedsReducer.feeds);
  const [loading, setLoading] = useState({ status: "", loading: false });

  const dispatch = useDispatch();

  const fetchFeeds = async () => {
    if (feeds) return;
    try {
      const response = await axios.get(
        BASE_URL + "/user/feeds",

        { withCredentials: true }
      );

      dispatch(addFeeds(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusChange = async (status, userId) => {
    try {
      setLoading({ status: status, loading: true });
      const response = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
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
      <div className="flex flex-col items-center my-5">
        <h1 className="p-4 pb-2 text-lg  opacity-60 tracking-wide">
          Your Feeds
        </h1>

        <About />

        <UserCard
          user={feeds[0]}
          handleClick={handleStatusChange}
          loading={loading}
        />
      </div>
    )
  );
}

export default Feed;
