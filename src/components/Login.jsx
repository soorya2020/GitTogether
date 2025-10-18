import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("achu@gmail.com");
  const [password, setPassword] = useState("Achu@123");
  const [error, setError] = useState("");
  const disptch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      disptch(addUser(response.data.user));
      navigate("/profile");
    } catch (error) {
      console.error(error);
      setError(error?.response?.data || "400 error");
    }
  };
  return (
    <div className="flex justify-center mt-30">
      <div className="card w-96 bg-base-200 shadow-sm ">
        <div className="card-body ">
          {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold">Login</h2>
          </div>
          <div className="mt-6">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Your email... "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input w-full "
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-error">{error}</p>
            </fieldset>
          </div>
          <div className="mt-6">
            <button className="btn btn-primary btn-block" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
