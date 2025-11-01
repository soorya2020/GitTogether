import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/connectionSlice";
import ConnectionList from "./ConnectionList";
import { useNavigate } from "react-router";
import EmptyState from "./EmptyState";
import Loading from "./Loading";

const Connections = () => {
  const { connections } = useSelector((store) => store.connectionsReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getConnections = async () => {
    try {
      const response = await axios.get(BASE_URL + "/user/request/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = (value, id) => {
    if (value === "chat") {
      navigate("/chat/" + id);
    }
  };
  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return <Loading />;

  if (connections && connections.length === 0)
    return (
      <EmptyState
        title={"Looks a little empty here 👀"}
        message={
          "Go explore the feed — you might just find your next coding buddy!"
        }
        buttonText={"Go to Feeds"}
        link={"/feeds"}
      />
    );

  return (
    <div className="flex justify-center w-full px-2 sm:px-0">
      <ul className="w-full md:w-2/3 lg:w-1/2 bg-base-300 rounded-box ">
        <h1 className="p-4 pb-2 text-xl font-semibold text-center opacity-70 mb-5">
          Connections
        </h1>

        {connections.length > 0 ? (
          connections.map((connection, index) => (
            <ConnectionList
              key={connection._id}
              id={connection._id}
              index={index}
              {...connection}
              handleClick={handleButtonClick}
            />
          ))
        ) : (
          <div className="p-6 text-center opacity-60">
            No connections yet — explore feeds to find new ones!
          </div>
        )}
      </ul>
    </div>
  );
};

export default Connections;
