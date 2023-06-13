import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { logOut } from "../api/auth";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  // const user = false;
  const handleLogout = () => {
    logOut();
    setUser(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white">LOGO</span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <div>Home</div>
              </Link>
              <Link
                to="/userprofile"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <div>User Profile</div>
              </Link>
              <NavLink
                to="user"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <div>Users</div>
              </NavLink>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <NavLink to="/login">
                    <div>logout</div>
                  </NavLink>
                </button>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <div>login</div>
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <div>Register</div>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
