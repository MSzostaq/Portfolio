import React from "react";
import styled from "styled-components";
import About from "views/About";
import Contact from "views/Contact";
import Welcome from "views/Welcome";
import Navbar from "components/Navbar";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Welcome />
      <About />
      <Contact />
    </Wrapper>
  );
};

export default App;
