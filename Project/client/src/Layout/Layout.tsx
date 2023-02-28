import React, { ReactNode } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import explore from "../assets/undraw_explore_re_8l4v.svg";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="layout-container flex h-full w-full flex-col"
      style={{
        position: "relative",
      }}
    >
      <Header />
      <main className="main-container mt-10 h-full items-center justify-center px-10">
        {children}
      </main>
      <Footer />
      <div
        className="bg-image absolute inset-0"
        style={{
          position: "absolute",
          backgroundImage: `url(${explore})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 150px",
          backgroundSize: "contain",
          opacity: 0.5,
        }}
      ></div>
    </div>
  );
};
