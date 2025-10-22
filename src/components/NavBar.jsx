import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router";
import ThemeChanger from "./ThemeChanger";
import { clearRequests } from "../store/requestSlice";
import { clearFeeds } from "../store/feedSlice";
import { clearConnections } from "../store/connectionSlice";

function NavBar() {
  const user = useSelector((store) => store.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );
      alert(response.data.message);
      navigate("/login");
      dispatch(removeUser());
      dispatch(clearFeeds());
      dispatch(clearRequests());
      dispatch(clearConnections());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm flex flex-wrap px-4 md:px-8">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-lg md:text-xl">
          🧑‍💻 GitTogether
        </Link>
      </div>

      {user && (
        <div className="flex items-center gap-2 md:gap-4 flex-wrap md:flex-nowrap">
          <div className="mx-2 my-2 hidden sm:block">
            <h1 className="text-ghost text-lg  md:text-lg text-center sm:text-left">
              Welcome, <a className="text-primary"> {user?.firstName}</a>
            </h1>
          </div>

          <div className="dropdown dropdown-end mx-2 md:mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 md:w-16 lg:w-20 rounded-full">
                <img
                  alt="User Avatar"
                  src={user?.profileUrl}
                  className="object-cover"
                />
              </div>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 sm:w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={"/connections"}>Connections</Link>
              </li>
              <li>
                <Link to={"/feeds"}>Feeds</Link>
              </li>
              <li>
                <Link to={"/requests"}>Requests</Link>
              </li>
              <li>
                <Link className="text-error" onClick={handleLogOut}>
                  Logout
                </Link>
              </li>
              <li>
                <ThemeChanger />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
