import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
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
