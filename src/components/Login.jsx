import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("achu@gmail.com");
  const [password, setPassword] = useState("Achu@123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const disptch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.userReducer.user);

  useEffect(() => {
    //cannot access login if user already exist
    if (user) {
      navigate("/feeds");
    }
  }, [user]);

  const handleAuth = async () => {
    try {
      if (isLogin) {
        const response = await axios.post(
          BASE_URL + "/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        disptch(addUser(response.data.user));
        navigate("/feeds");
      } else {
        const response = await axios.post(
          BASE_URL + "/signup",
          { email, password, firstName, lastName },
          { withCredentials: true }
        );
        disptch(addUser(response.data.data));
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
      setError(error?.response?.data || "400 error");
    }
  };
  return (
    <div className="flex justify-center mt-15">
      <div className="card w-96 bg-base-200 shadow-sm ">
        <div className="card-body ">
          {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
          </div>
          <div className="mt-6">
            <fieldset className="fieldset">
              {!isLogin && (
                <>
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your First name... "
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    className="input w-full "
                    placeholder="your Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </>
              )}
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
          <a onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "signup" : "login"}
          </a>

          <div className="mt-6">
            <button className="btn btn-primary btn-block" onClick={handleAuth}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
