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

  const hideTabs = location.pathname === "/" || location.pathname === "/login";

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

      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />

      {/* Main content area grows to fill available space */}
      <div className="flex-grow  bg-base-300">
        <Outlet />
      </div>

      {/* Tabs visible only on mobile and hidden on '/' or '/login' */}
      {!hideTabs && (
        <div className="w-full sm:hidden">
          <Tabs />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BodyLayout;
