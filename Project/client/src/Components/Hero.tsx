import React from "react";
import { TbWindmill } from "react-icons/tb";
import explore from "../assets/undraw_explore_re_8l4v.svg";
interface HeroProps {
  onButtonClick: () => void;
}

export const Hero = ({ onButtonClick }: HeroProps) => {
  return (
    <div className="hero-container relative h-[800px] items-center border-b-2 border-gray-800 sm:flex sm:flex-col sm:justify-center sm:gap-10 lg:flex-row lg:justify-between">
      <div className="hero-text relative z-10 flex flex-col items-start justify-center gap-10">
        <h1 className="text-5xl font-extrabold">
          Explore Wind Energy Potential in Connecticut
        </h1>
        <p>
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
        <button
          className="w-1/3 rounded-3xl border-2 border-red-200 bg-red-100 p-3 shadow-[5px_5px_2px_0px_#fca5a5] hover:bg-red-200"
          onClick={onButtonClick}
        >
          <h1 className="text-lg font-semibold">Get Started</h1>
        </button>
      </div>

      <div className="hero-image relative z-10 flex flex-col items-center justify-center rounded-3xl border-2 border-sky-200 bg-sky-100 py-16 px-20 shadow-[6px_6px_2px_0px_#7dd3fc]">
        <div className="hero-image-text mb-5 flex flex-row items-center justify-center gap-5">
          <TbWindmill className="h-20 w-20" />
          <h1 className="text-2xl font-semibold">
            Historical Wind Data In Connecticut
          </h1>
        </div>
        <p className="mb-1">Avg Wind Speed: 5.2 m/s</p>
        <p className="mb-1">Avg Temperature: 20.2 C</p>
      </div>
      <div
        className="bg-image absolute inset-0"
        style={{
          position: "absolute",
          backgroundImage: `url(${explore})`,
          // backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 150px",
          // backgroundSize: "contain",
          opacity: 0.5,
        }}
      ></div>
    </div>
  );
};
