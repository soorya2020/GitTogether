import React, { useEffect } from "react";

import NavBar from "./NavBar";
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router";
import Footer from "./Footer";
import SpeedDial from "./SpeedDial";
import Tabs from "./Tabs";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const BodyLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname == "/", "mu location");

  const user = useSelector((store) => store.userReducer.user);

  const fetchUser = async () => {
    if (user || location.pathname === "/") return;
    try {
      const response = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(response.data));
    } catch (error) {
      if (error.status == 401) {
        navigate("/login");
        dispatch(removeUser());
      }

      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />

      {/* Main content area grows to fill available space */}
      <main className="flex-grow ">
        <Outlet />
      </main>

      {/* <div
        className={`${
          location.pathname === "/" ? "hidden" : "hidden sm:block"
        }`}
      >
        <SpeedDial />
      </div> */}
      <div className="w-full">
        <Tabs />
      </div>

      <Footer />
    </div>
  );
};

export default BodyLayout;
