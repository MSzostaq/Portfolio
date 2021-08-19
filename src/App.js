import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import About from "views/About";
import Contact from "views/Contact";
import Welcome from "views/Welcome";
import Navbar from "components/Navbar";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Welcome />
        <About />
        <Contact />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
