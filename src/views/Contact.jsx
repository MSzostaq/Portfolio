import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "components/Icon";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Content = styled.ul`
  display: flex;
  margin: 8px;
`;

const IconAnimation = styled(motion.div)`
  background-color: transparent;
`;

const StyledGithubIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledLinkedInIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.linkedIn};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledMailIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Title>Contact me via email, gitHub, LinkedIn. Enjoy!</Title>
      <Content>
        <IconAnimation whileHover={{ scale: 1.1 }}>
          <StyledGithubIcon icon="github_64" />
        </IconAnimation>
        <IconAnimation whileHover={{ scale: 1.1 }}>
          <StyledLinkedInIcon icon="linkedin_64" />
        </IconAnimation>
        <IconAnimation whileHover={{ scale: 1.1 }}>
          <StyledGithubIcon icon="phone_64" />
        </IconAnimation>
        <IconAnimation whileHover={{ scale: 1.1 }}>
          <StyledMailIcon icon="mail_64" />
        </IconAnimation>
      </Content>
    </Wrapper>
  );
};

export default Contact;
