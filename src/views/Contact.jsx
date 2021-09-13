import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BackgroundParticles from "components/BackgroundParticles";
import Icon from "components/Icon";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  position: absolute;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Content = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const IconAnimation = styled(motion.div)`
  background-color: transparent;
`;

const StyledGithubIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledLinkedInIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.linkedIn};
  cursor: pointer;
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const Contact = () => {
  function onAtIconClick() {
    window.open("mailto:maciek.szostak55@gmail.com");
  }

  function onLinkedInIconClick() {
    window.open("https://www.linkedin.com/in/maciej-szostak-2910a9219/");
  }

  return (
    <Wrapper id="contact">
      <BackgroundParticles />
      <ContentWrapper>
        <Title>Contact me. Enjoy!</Title>
        <Content>
          <IconAnimation onClick={onAtIconClick} whileHover={{ scale: 1.1 }}>
            <StyledGithubIcon icon="at" />
          </IconAnimation>
          <IconAnimation
            onClick={onLinkedInIconClick}
            whileHover={{ scale: 1.1 }}
          >
            <StyledLinkedInIcon icon="linkedin_64" />
          </IconAnimation>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;
