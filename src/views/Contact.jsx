import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Icon from "components/Icon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const ContentWrapper = styled.div``;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (min-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
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

const StyledMailIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.silver};
  cursor: pointer;
  margin: 4px;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 64px;
    height: 64px;
  }

  @media (min-width: 1800px) {
    margin: 8px;
    width: 80px;
    height: 80px;
  }
`;

const StyledLinkedInIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.linkedIn};
  cursor: pointer;
  margin: 4px;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 64px;
    height: 64px;
  }

  @media (min-width: 1800px) {
    margin: 8px;
    width: 80px;
    height: 80px;
  }
`;

const Contact = () => {
  const { t } = useTranslation();

  function onAtIconClick() {
    window.open("mailto:maciek.szostak55@gmail.com");
  }

  function onLinkedInIconClick() {
    window.open("https://www.linkedin.com/in/maciej-szostak-2910a9219/");
  }

  return (
    <Wrapper id="contact">
      <ContentWrapper>
        <Title>{t("contact")}</Title>
        <Content>
          <IconAnimation onClick={onAtIconClick} whileHover={{ scale: 1.1 }}>
            <StyledMailIcon icon="at" />
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
