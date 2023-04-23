import React from "react";
import { TbWindmill } from "react-icons/tb";
import explore from "../assets/undraw_explore_re_8l4v.svg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero-container items-center sm:flex sm:flex-col sm:justify-center sm:gap-10 lg:flex-row lg:justify-between">
      <div className="hero-text z-10 flex flex-col items-start justify-center gap-10">
        <h1 className="text-5xl font-extrabold">
          Explore Wind Energy Potential in Connecticut
        </h1>
        <p className="text-lg">
          Our website helps you visualize the wind pattern and temperature of
          locations in Connecticut, powered by{" "}
          <a
            className="rounded-3xl border-2 border-orange-200 bg-orange-100 p-2 font-semibold italic underline shadow-[5px_5px_2px_0px_#fdba74] hover:bg-orange-200"
            href="https://power.larc.nasa.gov/"
            target={"_blank"}
          >
            NASA's Power API.
          </a>
        </p>
        <Link
          to="/data"
          className="w-100 rounded-3xl border-2 border-red-200 bg-red-100 p-3 shadow-[5px_5px_2px_0px_#fca5a5] hover:bg-red-200"
        >
          <button>
            <h1 className="text-lg font-semibold">Get Started</h1>
          </button>
        </Link>
      </div>

      <div className="hero-image z-10 flex flex-col items-center justify-center rounded-3xl border-2 border-sky-200 bg-sky-100 py-16 px-20 shadow-[6px_6px_2px_0px_#7dd3fc]">
        <div className="hero-image-text mb-5 flex flex-row items-center justify-center gap-5">
          <TbWindmill className="h-20 w-20" />
          <h1 className="text-2xl font-semibold">
            Historical Wind Data In Connecticut
          </h1>
        </div>
        <p className="mb-1">Avg Wind Speed: 5.2 m/s</p>
        <p className="mb-1">Avg Temperature: 20.2 C</p>
      </div>
    </div>
  );
};
