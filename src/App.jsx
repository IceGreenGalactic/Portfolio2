import React, { useState } from "react";
import Layout from "./Layout/Layout";
import Hero from "./components/Hero/Hero";
import ProjectSection from "./components/ProjectCards/ProjectSection";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import { lightTheme, darkTheme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout toggleTheme={toggleTheme}>
          <Hero />
          <ProjectSection />
          <Technologies />
          <About />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
