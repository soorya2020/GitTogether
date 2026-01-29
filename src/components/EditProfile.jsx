import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import Loading from "./Loading";
import axios from "axios";
import { addUser } from "../store/userSlice";
import { API } from "../utils/axios";

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
      const response = await API.patch("/profile/edit", formData);
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
    <div className="toast toast-top toast-center z-[200]">
      <div className="alert alert-success shadow-lg border-none rounded-2xl py-3 px-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="font-bold tracking-tight text-sm">Profile updated successfully!</span>
      </div>
    </div>
  )}

  <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-7xl mx-auto p-4 md:p-8">
    
    {/* Form Card */}
    <div className="card w-full lg:w-2/3 bg-base-100 shadow-xl border border-base-content/5 overflow-hidden">
      {/* HEADER SECTION */}
      <div className="bg-base-200/50 px-8 py-6 border-b border-base-content/5">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter">
          Edit <span className="text-primary">Profile</span>
        </h2>
        <p className="text-xs opacity-50 uppercase font-bold tracking-widest mt-1">Configure your developer persona</p>
      </div>

      <div className="card-body p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Section: Basic Identity */}
          <div className="form-control w-full">
            <label className="label uppercase text-[10px] font-black opacity-50 tracking-widest">First Name</label>
            <input
              type="text"
              name="firstName"
              className="input input-bordered w-full focus:input-primary transition-all rounded-xl font-medium"
              placeholder="e.g. Linus"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-control w-full">
            <label className="label uppercase text-[10px] font-black opacity-50 tracking-widest">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="input input-bordered w-full focus:input-primary transition-all rounded-xl font-medium"
              placeholder="e.g. Torvalds"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-control w-full md:col-span-2">
            <label className="label uppercase text-[10px] font-black opacity-50 tracking-widest">Profile Image URL</label>
            <input
              type="url"
              name="profileUrl"
              className="input input-bordered w-full focus:input-primary transition-all rounded-xl font-mono text-sm"
              placeholder="https://github.com/avatar.png"
              value={formData.profileUrl}
              onChange={handleChange}
            />
          </div>

          {/* Section: Stats */}
          <div className="form-control w-full">
            <label className="label uppercase text-[10px] font-black opacity-50 tracking-widest">Age</label>
            <input
              type="number"
              name="age"
              className="input input-bordered w-full focus:input-primary transition-all rounded-xl"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div className="form-control w-full">
            <label className="label uppercase text-[10px] font-black opacity-50 tracking-widest">Gender Identity</label>
            <select
              name="gender"
              className="select select-bordered w-full focus:select-primary transition-all rounded-xl"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Section: Skills & Bio */}
          <div className="form-control w-full md:col-span-2">
            <label className="label uppercase text-[10px] font-black opacity-50 tracking-widest">Tech Stack (CSV)</label>
            <input
              type="text"
              name="skills"
              className="input input-bordered w-full focus:input-primary transition-all rounded-xl font-mono"
              placeholder="React, Tailwind, Node.js..."
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          <div className="form-control w-full md:col-span-2">
            <label className="label uppercase text-[10px] font-black opacity-50 tracking-widest">About / Bio</label>
            <textarea
              name="about"
              className="textarea textarea-bordered w-full focus:textarea-primary transition-all rounded-xl min-h-[80px] leading-relaxed"
              placeholder="Tell other developers about your mission..."
              value={formData.about}
              onChange={handleChange}
            />
          </div>
        </div>

        {errorMessage && (
          <div className="alert alert-error rounded-xl mt-4 py-2">
            <span className="text-xs font-bold">{errorMessage}</span>
          </div>
        )}

        <div className="mt-8">
          <button
            className={`btn btn-block btn-primary h-14 rounded-2xl font-black italic text-lg transition-all active:scale-95 shadow-lg
              ${!hasChanges ? 'opacity-50 grayscale cursor-not-allowed' : 'shadow-primary/20 hover:shadow-primary/40'}`}
            onClick={handleSave}
            disabled={!hasChanges}
          >
            {hasChanges ? "PUSH CHANGES" : "NO CHANGES DETECTED"}
          </button>
        </div>
      </div>
    </div>

    {/* Preview Card Section */}
    <div className="w-full lg:w-1/3 flex flex-col items-center">
        <div className="sticky top-24 w-full">
            <div className="text-center mb-4">
                <span className="badge badge-outline opacity-50 font-black uppercase tracking-widest text-[10px]">Live Preview</span>
            </div>
            <UserCard user={formData} />
        </div>
    </div>
  </div>
</>
  );
};

export default EditProfile;
