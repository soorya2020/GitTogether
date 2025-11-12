import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import GoogleButton from "./GoogleButton";
import { API } from "../utils/axios";

import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState("demouser@gmail.com");
  const [password, setPassword] = useState("Demo@123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const disptch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.userReducer.user);


  const googleButtonRef = useRef(null);

  useEffect(() => {
    //cannot access login if user already exist
    if (user) {
      navigate("/feeds");
    }
  }, []);

  const handleAuth = async () => {
    try {
      if (isLogin) {
        const response = await API.post("/login", {
          email,
          password,
        });
        disptch(addUser(response.data.user));
        navigate("/feeds");
      } else {
        const response = await API.post("/signup", {
          email,
          password,
          firstName,
          lastName,
        });
        disptch(addUser(response.data.data));
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
      setError(error?.response?.data || "400 error");
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      console.log(credentialResponse);

      const { credential } = credentialResponse;
      // Send credential (ID token) to your backend
      const res = await API.post("/auth/google-login", { credential });
      navigate("/profile");

      disptch(addUser(res.data.user));
    } catch (err) {
      console.error(err);
    }
  };

  // const login = useGoogleLogin({
  //   onSuccess: (response) => console.log(response),

  // });

  return (
    <div
      className={`flex justify-center  ${
        isLogin ? "mt-30" : "mt-15"
      } sm:mt-15 scale-85  sm:scale-90 `}
    >
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
          <p className="text-sm text-gray-500">
            {isLogin ? (
              <>
                New here?{" "}
                <a
                  onClick={() => setIsLogin(false)}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Sign up
                </a>
              </>
            ) : (
              <>
                Already a user?{" "}
                <a
                  onClick={() => setIsLogin(true)}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Log in
                </a>
              </>
            )}
          </p>

          <div className="mt-6">
            <button className="btn btn-primary btn-block" onClick={handleAuth}>
              {isLogin ? "Login" : "Sign Up"}
            </button>

            <div>
              {/* Hidden Google Login button */}
              <div className="mt-5 ">
                <GoogleLogin
                  theme="outline"
                  width={"100%"}
                  text={isLogin ? "signin_with" : "signup_with"}
                  logo_alignment="center"
                  onSuccess={handleGoogleLogin}
                  onError={() => console.log("Google login failed")}
                />
              </div>
            </div>
            {/* <GoogleButton onClick={() => login()} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
