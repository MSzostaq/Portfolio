import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import About from "views/About";
import Contact from "views/Contact";
import Projects from "views/Projects";
import Welcome from "views/Welcome";
import Navbar from "components/Navbar";

const Wrapper = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
