import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const WelcomeWrapper = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-wrap: break-word;
  height: 100vh;
`;

const Title = styled(Typed)`
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

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <Wrapper id="welcome">
      <WelcomeWrapper>
        <Title strings={[t("welcome")]} typeSpeed={40} />
        <br />
        <SecondaryTitle
          strings={[t("coment")]}
          startDelay={4000}
          showCursor={false}
          typeSpeed={40}
        />
      </WelcomeWrapper>
    </Wrapper>
  );
};

export default Welcome;
