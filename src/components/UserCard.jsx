import React from "react";
import Loader from "./Loader";

const UserCard = ({ user, handleClick = () => {}, loading }) => {
  const ignoredLoading =
    loading?.status === "ignored" ? loading.loading : false;
  const interestedLoading =
    loading?.status === "interested" ? loading.loading : false;
  const { _id, firstName, lastName, about, skills, age, gender, profileUrl } =
    user;
  return (
    <div key={user?._id} className="card bg-base-200 w-96 shadow-sm  ">
      <figure className="h-100 w-full overflow-hidden">
        <img
          src={profileUrl || "https://via.placeholder.com/150"}
          alt="Shoes"
          className="h-full w-full object-cover object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        {age && gender && <p>{age + ", " + gender}</p>}

        <div className="card-actions justify-between mt-5">
          <button
            className="btn bg-error w-28"
            onClick={() => handleClick("ignored", _id)}
          >
            {ignoredLoading ? <Loader /> : "Ignore"}
          </button>
          <button
            className="btn btn-accent w-28"
            onClick={() => handleClick("interested", _id)}
          >
            {interestedLoading ? <Loader /> : "Interested"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
