import React from "react";
import team from "../assets/undraw_project_team_lc5a.svg";

export const About = () => {
  return (
    <>
      <div className="about-container flex h-full w-full flex-col items-center justify-center gap-10">
        <div className="about-title relative z-10 flex w-full items-center justify-center">
          <h1 className="relative z-10 w-full text-3xl font-bold">
            About Wind Energy in Connecticut
          </h1>
        </div>
        <div className="about-item z-10 gap-7 sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
            aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies
            lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet
            nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet
            nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec
            ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit
            amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl
            aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl
            nec ultricies
          </p>
        </div>

        <div className="about-item z-10 w-full gap-7 sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
            aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies
            lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet
            nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet
            nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec
            ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit
            amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl
            aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl
            nec ultricies
          </p>
        </div>
      </div>
      <div
        className="bg-image absolute inset-0"
        style={{
          position: "absolute",
          backgroundImage: `url(${team})`,
          // backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 150px",
          backgroundSize: "contain",
          opacity: 0.5,
        }}
      ></div>
    </>
  );
};
