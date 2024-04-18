import React from "react";
import team from "../assets/undraw_team_collaboration_re_ow29.svg";
import mission from "../assets/undraw_our_solution_re_8yk6 (1).svg";

export const About = () => {
  return (
    <div className="about-container mb-5 h-full min-h-screen w-full rounded-xl border border-gray-200 bg-gray-100 px-8 pt-20 pb-10">
      <div className="about-title mb-12 w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          About FluffyBarnacles
        </h1>
      </div>
      <div className="about-content mx-auto max-w-4xl">
        <div className="about-item mb-8 flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="about-item-image w-full overflow-hidden rounded-lg border border-gray-200 shadow-lg md:w-1/2">
            <img src={mission} alt="mission" className="w-full" />
          </div>
          <div className="about-item-text w-full rounded-lg bg-gradient-to-r from-green-200 to-blue-200 p-6 px-4 shadow-lg md:w-1/2">
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Our mission is to simplify and visualize wind data in Connecticut,
              making it accessible and comprehensible for everyone, especially
              the common citizens. We believe that by raising awareness and
              fostering understanding of wind energy potential in our state, we
              can empower our communities to make informed decisions about
              adopting renewable energy sources. Our goal is to contribute to a
              greener, healthier future for Connecticut and inspire others to
              join the movement towards sustainable living.
            </p>
          </div>
        </div>
        <div className="about-item mb-8 flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="about-item-text w-full rounded-lg bg-gradient-to-r from-purple-200 to-indigo-200 p-6 px-4 shadow-lg md:w-1/2">
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">
              Our Team
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We are FluffyBarnacles, a group of passionate college students
              from diverse academic backgrounds. Driven by our shared commitment
              to a sustainable future, we have come together to make wind energy
              data more accessible and engaging for everyone. Our team members
              work collaboratively to research, analyze, and visualize complex
              wind data, transforming it into user-friendly information that can
              educate and inspire our communities to embrace clean, renewable
              energy sources.
            </p>
          </div>
          <div className="about-item-image w-full overflow-hidden rounded-lg border border-gray-200 shadow-lg md:w-1/2">
            <img src={team} alt="team" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
