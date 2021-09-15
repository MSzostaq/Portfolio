import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import Contact from "views/Contact";
import Projects from "views/Projects";
import Skills from "views/Skills";
import Welcome from "views/Welcome";
import DownloadCvButton from "components/DownloadCvButton";
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
        <Skills />
        <Projects />
        <Contact />
        <DownloadCvButton />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
