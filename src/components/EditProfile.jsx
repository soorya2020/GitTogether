import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../store/userSlice";

const EditProfile = () => {
  const user = useSelector((store) => store.userReducer.user);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [toast, setToast] = useState(false);

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          about,
          age,
          gender,
          skills,
          profileUrl,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response.data.data));
      setErrorMessage("");
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
    } catch (error) {
      setErrorMessage(error.response.data || "something went wrong");
      console.error(error);
    }
  };

  // ⬇ update local state when user data arrives
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAbout(user.about || "");
      setAge(user.age || "");
      setGender(user.gender || "");
      setSkills(user.skills || "");
      setProfileUrl(user.profileUrl || "");
    }
  }, [user]);
  return (
    user && (
      <>
        {toast && (
          <div className="toast toast-top toast-center z-10">
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          </div>
        )}
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 mt-5 mb-15">
          <div className="card w-96 bg-base-200 shadow-sm ">
            <div className="card-body ">
              {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
              <div className="flex justify-center">
                <h2 className="text-3xl font-bold">Edit Profile</h2>
              </div>
              <div className="mt-6">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your email... "
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your email... "
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <legend className="fieldset-legend">profile URL</legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your email... "
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                  />
                  <legend className="fieldset-legend">Age</legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your email... "
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <legend className="fieldset-legend">About</legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your email... "
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                  <legend className="fieldset-legend">gender</legend>
                  <input
                    type="text"
                    className="input w-full "
                    placeholder="Password..."
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <p className="text-error">{errorMessage}</p>
                </fieldset>
              </div>
              <div className="mt-6">
                <button
                  className="btn btn-primary btn-block"
                  onClick={handleSave}
                >
                  SAVE
                </button>
              </div>
            </div>
          </div>
          <div>
            <UserCard
              user={{
                firstName,
                lastName,
                age,
                about,
                skills,
                gender,
                profileUrl,
                about,
              }}
            />
          </div>
        </div>
      </>
    )
  );
};

export default EditProfile;
