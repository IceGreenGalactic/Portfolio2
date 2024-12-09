import React, { useState } from "react";
import Layout from "./Layout/Layout";
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
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
