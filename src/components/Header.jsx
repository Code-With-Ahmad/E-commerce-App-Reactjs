import React from "react";
import logo from "../assets/images/logo_white.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeProvider";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout(); // This clears localStorage via AuthProvider
      toast.success("You have logged out successfully", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Logout failed: " + error.message);
    }
  };

  return (
    <header className="flex justify-between items-center p-4 px-8 py-8 bg-white dark:bg-slate-900 text-black dark:text-white shadow-md transition-colors duration-200">
      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          className="h-5 w-auto invert-100 dark:invert-0"
        />
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-600 dark:hover:text-gray-100 transition-colors text-1xl relative dark:after:bg-white after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `hover:text-gray-600 dark:hover:text-gray-100 transition-colors text-1xl relative dark:after:bg-white after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `hover:text-gray-600 dark:hover:text-gray-100 transition-colors text-1xl relative dark:after:bg-white after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                `hover:text-gray-600 dark:hover:text-gray-100 transition-colors text-1xl relative dark:after:bg-white after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              Pages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `hover:text-gray-600 dark:hover:text-gray-100 transition-colors text-1xl relative dark:after:bg-white after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="icons flex space-x-6">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="w-5 h-5" />
          )}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
          <FontAwesomeIcon icon={faBagShopping} />
        </button>
        {user ? (
          <button
            onClick={handleLogout}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
