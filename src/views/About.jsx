import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.selectedGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const About = () => {
  return (
    <Wrapper id="about">
      <h1>About</h1>
    </Wrapper>
  );
};

export default About;
