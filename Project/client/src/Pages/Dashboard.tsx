import { Hero } from "../Components/Hero";
import explore from "../assets/undraw_explore_re_8l4v.svg";

export const Dashboard = () => {
  return (
    <>
      <div className="home-container flex h-full w-full flex-col items-center justify-center gap-10">
        <Hero />
      </div>
      <div
        className="bg-image absolute inset-0"
        style={{
          position: "absolute",
          backgroundImage: `url(${explore})`,
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
