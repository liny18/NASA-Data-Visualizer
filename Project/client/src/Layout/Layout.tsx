import React, { ReactNode } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="layout-container flex h-screen w-full flex-col"
      style={{
        position: "relative",
      }}
    >
      <Header />
      <main className="main-container mt-10 h-full items-center justify-center px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};
