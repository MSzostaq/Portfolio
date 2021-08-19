import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.succes};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Title>Contact me via email, LinkedIn and phone. Enjoy!</Title>
    </Wrapper>
  );
};

export default Contact;
