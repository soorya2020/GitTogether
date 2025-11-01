import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeConnection } from "../store/requestSlice";
import { BASE_URL } from "../utils/constants";
import ConnectionList from "./ConnectionList";
import EmptyState from "./EmptyState";
import Loading from "./Loading";

const Requests = () => {
  const dispatch = useDispatch();
  const { requests } = useSelector((store) => store.requestsReducer);

  const getRequests = async () => {
    try {
      const response = await axios.get(BASE_URL + "/user/request/recieved", {
        withCredentials: true,
      });
      dispatch(addRequests(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = async (status, connectionRequestId) => {
    const response = await axios.post(
      BASE_URL + `/request/review/${status}/${connectionRequestId}`,
      {},
      { withCredentials: true }
    );
    dispatch(removeConnection(connectionRequestId));
  };

  useEffect(() => {
    if (!requests) {
      getRequests();
    }
  }, []);
  if (!requests) return <Loading />;
  if (requests.length === 0)
    return (
      <EmptyState
        title={"It’s Quiet Here 👀"}
        message={
          "you don’t have any connection requests right now. Explore the feed and discover new developers to connect with."
        }
        buttonText={"Explore"}
        link={"/feeds"}
      />
    );
  return (
    <div className="flex justify-center">
      <ul className="w-full  bg-base-300 md:w-2/3 lg:w-1/2 bg-base-100 rounded-box shadow-md">
        <div className="flex justify-center">
          <li className="p-4 pb-2 text-lg  font-semibold opacity-80 tracking-wide">
            Requests
          </li>
        </div>
        {requests.map((request, index) => {
          return (
            <div className="mt-5 overflow-hidden"  key={request._id}>
              <ConnectionList
                id={request._id}
                index={index}
                showButtons={true}
                {...request.fromUserId}
                handleClick={handleButtonClick}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Requests;
