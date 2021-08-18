import React from "react";
import styled from "styled-components";
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
      <Navbar />
      <Welcome />
      <About />
      <Contact />
    </Wrapper>
  );
};

export default App;
