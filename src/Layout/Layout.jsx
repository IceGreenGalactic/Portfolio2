import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../components/Hero/Hero";

const Layout = ({ children, toggleTheme }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header toggleTheme={toggleTheme} />
      <Hero />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
