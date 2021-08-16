import React from "react";
import styled from "styled-compoennts";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Welcome = () => {
  return (
    <Wrapper>
      <h1>Welcome</h1>
    </Wrapper>
  );
};

export default Welcome;
