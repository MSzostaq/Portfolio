import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Welcome = () => {
  return (
    <Wrapper id="welcome">
      <h1>Welcome</h1>
    </Wrapper>
  );
};

export default Welcome;
