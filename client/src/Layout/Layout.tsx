import React, { ReactNode } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useLocation } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isDataPage =
    location.pathname === "/node/data" || location.pathname === "/node/about";

  return (
    <div
      className={`layout-container flex w-full flex-col ${
        isDataPage ? "" : "h-screen"
      }`}
      style={{
        position: "relative",
      }}
    >
      <Header />
      <div className="layout-content flex h-full min-h-screen w-full flex-col items-center justify-between pt-48 md:pt-24">
        <main className="main-container mt-10 h-full items-center justify-center px-10">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
