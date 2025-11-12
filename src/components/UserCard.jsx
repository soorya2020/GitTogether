import React from "react";
import Loader from "./Loader";
import { Star } from "lucide-react";

const UserCard = ({ user, handleClick = () => {}, loading }) => {
  console.log(user);

  const ignoredLoading =
    loading?.status === "ignored" ? loading.loading : false;
  const interestedLoading =
    loading?.status === "interested" ? loading.loading : false;
  const {
    _id,
    firstName,
    lastName,
    about,
    skills,
    age,
    gender,
    profileUrl,
    isPremium,
  } = user;

  function getHighResGoogleProfile(url) {
    if (!url || typeof url !== "string") return url;
    // Regex: =s<number>-c  OR =s<number>
    const regex = /=s\d+(-c)?/;
    // Replace with =s0-c (max resolution) only if it exists
    if (regex.test(url)) {
      return url.replace(regex, "=s0-c");
    }
    return url;
  }

  return (
    <div key={user?._id} className="card bg-base-200 w-96 shadow-sm  ">
      <figure className="h-100 w-full overflow-hidden">
        <img
          src={
            getHighResGoogleProfile(profileUrl) ||
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
          alt="profile image"
          className="h-full w-full object-cover object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName + " " + lastName}
          <div className="tooltip cursor-pointer" data-tip="premium user">
            {isPremium && (
              <span>
                {" "}
                <Star fill="yellow" size={16} />
              </span>
            )}
          </div>
        </h2>
        <p>{about}</p>
        {age && gender && <p>{age + ", " + gender}</p>}

        <div className="card-actions justify-between mt-5">
          <button
            className="btn btn-outline btn-error w-28"
            onClick={() => handleClick("ignored", _id)}
          >
            {ignoredLoading ? <Loader /> : "Reject"}
          </button>
          <button
            className="btn  btn-info w-28 "
            onClick={() => handleClick("interested", _id)}
          >
            {interestedLoading ? <Loader /> : "Commit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
