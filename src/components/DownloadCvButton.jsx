import styled from "styled-components";
import Icon from "components/Icon";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.colors.darkGrey};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2px;
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 999;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    width: 64px;
    height: 64px;
  }
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.grey};
  padding: 4px;
  width: 24px;
  height: 24px;

  @media (min-width: 800px) {
    width: 24px;
    height: 24px;
  }
`;

const DownloadCvButton = () => {
  function onCvButtonClick() {
    window.open(
      "https://drive.google.com/file/d/13CPnidu_OznHfz9HBQMML90IvY57sbLQ/view?usp=sharing"
    );
  }

  return (
    <Button onClick={onCvButtonClick}>
      <StyledText>cv</StyledText>
      <StyledIcon icon="download_48" />
    </Button>
  );
};

export default DownloadCvButton;
