import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, toggleTheme }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header toggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
