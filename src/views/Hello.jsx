import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import photo from "assets/profilePhoto.jpg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const WelcomeWrapper = styled(motion.div)`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-wrap: break-word;
  height: 100vh;
`;

const Photo = styled(motion.img)`
  border: 6px solid ${({ theme }) => theme.colors.js};
  box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.colors.darkGrey};
  border-radius: 50%;
  margin: 20px;
  width: 160px;
  height: 160px;

  @media (min-width: 800px) {
    margin: 24px;
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1800px) {
    margin: 36px;
    width: 240px;
    height: 240px;
  }
`;

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

const SecondaryTitle = styled(Typed)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  margin-top: 12px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const containter = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
};

const Hello = () => {
  const { t } = useTranslation();

  return (
    <Wrapper id="hello">
      <WelcomeWrapper variants={containter} initial="hidden" animate="show">
        <Photo
          whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          src={photo}
        />
        <Title>{t("welcome")}</Title>
        <SecondaryTitle
          strings={["// frontend dev"]}
          startDelay={1000}
          showCursor={false}
          typeSpeed={40}
        />
      </WelcomeWrapper>
    </Wrapper>
  );
};

export default Hello;
