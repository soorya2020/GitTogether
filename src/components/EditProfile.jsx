import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import Loading from "./Loading";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../store/userSlice";
import { API } from '../utils/axios'

const EditProfile = () => {
  const user = useSelector((store) => store.userReducer.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    about: "",
    age: "",
    gender: "",
    skills: "",
    profileUrl: "",
    isPremium: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [toast, setToast] = useState(false);
  const [hasChanges, setHasChanges] = useState(false); // track changes

  // Update form data when user data arrives
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        about: user.about || "",
        age: user.age || "",
        gender: user.gender || "",
        skills: user.skills || "",
        profileUrl: user.profileUrl || "",
       
      });
    }
  }, [user]);

  // Detect if there are any changes compared to the original user
  useEffect(() => {
    if (!user) return;

    const isChanged =
      formData.firstName !== (user.firstName || "") ||
      formData.lastName !== (user.lastName || "") ||
      formData.about !== (user.about || "") ||
      formData.age !== (user.age || "") ||
      formData.gender !== (user.gender || "") ||
      formData.skills !== (user.skills || "") ||
      formData.profileUrl !== (user.profileUrl || "");

    setHasChanges(isChanged);
  }, [formData, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!hasChanges) return; // no changes, do nothing
    try {
      const response = await API.patch(BASE_URL + "/profile/edit", formData);
      dispatch(addUser(response.data.data));
      setErrorMessage("");
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    } catch (error) {
      setErrorMessage(error.response?.data || "Something went wrong");
      console.error(error);
    }
  };

  if (!user) return <Loading />;

  return (
    <>
      {toast && (
        <div className="toast toast-top toast-center z-10">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-center gap-10 mt-5 mb-15 lg:mx-10 lg:mt-5 lg:scale-90">
        {/* Form Card */}
        <div className="card w-full lg:w-2/3 bg-base-200 shadow-sm">
          <div className="card-body">
            <h2 className="text-3xl font-bold mb-4">Edit Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="input w-full"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="input w-full"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Profile URL */}
              <div>
                <label className="label">Profile URL</label>
                <input
                  type="url"
                  name="profileUrl"
                  className="input w-full"
                  placeholder="Profile Image URL"
                  value={formData.profileUrl}
                  onChange={handleChange}
                />
              </div>

              {/* Age */}
              <div>
                <label className="label">Age</label>
                <input
                  type="number"
                  name="age"
                  className="input w-full"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              {/* Gender */}
              <div>
                <label className="label">Gender</label>
                <select
                  name="gender"
                  className="input w-full"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Skills */}
              <div>
                <label className="label">Skills (comma separated)</label>
                <input
                  type="text"
                  name="skills"
                  className="input w-full"
                  placeholder="e.g. React, Node, MongoDB"
                  value={formData.skills}
                  onChange={handleChange}
                />
              </div>

              {/* About (full width) */}
              <div className="md:col-span-2">
                <label className="label">About</label>
                <textarea
                  name="about"
                  className="input w-full"
                  placeholder="About you..."
                  value={formData.about}
                  onChange={handleChange}
                />
              </div>
            </div>

            {errorMessage && <p className="text-error mt-2">{errorMessage}</p>}

            <div className="mt-6">
              <button
                className="btn btn-primary btn-block"
                onClick={handleSave}
                disabled={!hasChanges}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>

        {/* Preview Card */}
        <div className="w-full lg:w-1/3">
          <UserCard user={formData} />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
