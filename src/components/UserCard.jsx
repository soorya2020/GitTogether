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
    <div
      key={user?._id}
      className="group relative w-full max-w-sm aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl bg-base-300 mx-auto border-4 border-base-100 transition-all hover:scale-[1.01]"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={
          getHighResGoogleProfile(profileUrl) ||
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        }
        alt="profile"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* SMART GRADIENT OVERLAY (Protects text readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* TOP BADGE: PREMIUM STATUS */}
      {isPremium && (
        <div className="absolute top-4 right-4 z-20">
          <div className="badge badge-primary font-black gap-1 shadow-lg py-3 px-4 rounded-full">
            <Star size={14} fill="currentColor" /> PRO
          </div>
        </div>
      )}

      {/* BOTTOM CONTENT AREA */}
      <div className="absolute bottom-0 w-full p-6 flex flex-col gap-3">
        {/* INFO SECTION */}
        <div className="text-white">
          <h2 className="text-3xl font-black tracking-tighter flex items-baseline gap-2">
            {firstName}{" "}
            <span className="text-xl font-medium opacity-80">{age}</span>
          </h2>
          <p className="text-sm opacity-90 line-clamp-2 mt-1 font-medium leading-tight max-w-[90%]">
            {about || "Ready to ship code."}
          </p>
        </div>

        {/* COMPACT ACTION BUTTONS */}
        <div className="flex gap-3 mt-2">
          <button
            disabled={ignoredLoading}
            onClick={() => handleClick("ignored", _id)}
            className="btn flex-1 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-error hover:border-error transition-all rounded-2xl h-14"
          >
            {ignoredLoading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "Skip"
            )}
          </button>

          <button
            disabled={interestedLoading}
            onClick={() => handleClick("interested", _id)}
            className="btn flex-[1.5] btn-primary border-none shadow-xl rounded-2xl h-14 text-lg font-black italic"
          >
            {interestedLoading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "Commit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
