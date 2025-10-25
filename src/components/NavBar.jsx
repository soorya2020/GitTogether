import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Link, NavLink, useNavigate } from "react-router";
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
    <div className="navbar bg-base-300 shadow-sm px-4 md:px-8 justify-between">
      {/* LEFT: Logo */}
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost text-lg md:text-xl">
          🧑‍💻 GitTogether
        </Link>
      </div>

      {/* CENTER: Navigation Links */}
      <div className="hidden md:flex flex-1 justify-center gap-4">
        <NavLink
          to="/connections"
          className={({ isActive }) =>
            `btn btn-ghost text-sm md:text-base transition-colors ${
              isActive ? "text-secondary font-semibold" : ""
            }`
          }
        >
          Connections
        </NavLink>

        <NavLink
          to="/feeds"
          className={({ isActive }) =>
            `btn btn-ghost text-sm md:text-base transition-colors ${
              isActive ? "text-secondary font-semibold" : ""
            }`
          }
        >
          Feeds
        </NavLink>

        <NavLink
          to="/requests"
          className={({ isActive }) =>
            `btn btn-ghost text-sm md:text-base transition-colors ${
              isActive ? "text-secondary font-semibold" : ""
            }`
          }
        >
          Requests
        </NavLink>

        <NavLink
          to="/subscription"
          className={({ isActive }) =>
            `btn btn-ghost text-sm md:text-base transition-colors ${
              isActive ? "text-secondary font-semibold" : ""
            }`
          }
        >
          Subscription
        </NavLink>
      </div>

      {/* RIGHT: User Section */}
      {user && (
        <div className="flex items-center gap-3 md:gap-4 flex-none">
          <h1 className="hidden sm:block text-sm md:text-base whitespace-nowrap">
            Welcome,{" "}
            <span className="text-primary font-semibold">{user.firstName}</span>
          </h1>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 md:w-12 rounded-full">
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
                <Link to="/profile" className="justify-between">
                  Profile <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/feeds">Feeds</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <Link to="/subscription">Subscription</Link>
              </li>
              <li>
                <Link className="text-error" onClick={handleLogOut}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
