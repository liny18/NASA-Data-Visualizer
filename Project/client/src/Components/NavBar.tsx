import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-container flex flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row md:gap-10 md:px-8 md:py-6">
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
            <h1 className="text-sm md:text-base">DASHBOARD</h1>
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
            <h1 className="text-sm md:text-base">DATA</h1>
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
            <h1 className="text-sm md:text-base">ABOUT</h1>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
