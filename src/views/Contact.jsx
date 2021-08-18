import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <h1>Contact</h1>
    </Wrapper>
  );
};

export default Contact;
