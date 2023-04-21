import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-container items-between flex flex-row justify-between gap-10">
      <div className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `border-t-2 pt-1 font-extrabold ${
              isActive ? "border-blue-300 text-blue-300" : "border-blue-300"
            }`
          }
        >
          <button>
            <h1>DASHBOARD</h1>
          </button>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="/data"
          className={({ isActive }) =>
            `border-t-2 pt-1 font-extrabold ${
              isActive ? "border-green-300 text-green-300" : "border-green-300"
            }`
          }
        >
          <button>
            <h1>DATA</h1>
          </button>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `border-t-2 pt-1 font-extrabold ${
              isActive ? "border-amber-300 text-amber-300" : "border-amber-300"
            }`
          }
        >
          <button>
            <h1>ABOUT</h1>
          </button>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="/help"
          className={({ isActive }) =>
            `border-t-2 pt-1 font-extrabold ${
              isActive ? "border-red-300 text-red-300" : "border-red-300"
            }`
          }
        >
          <button>
            <h1>HELP</h1>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
