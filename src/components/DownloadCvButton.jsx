import styled from "styled-components";
import Icon from "components/Icon";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2px;
  position: fixed;
  right: 16px;
  bottom: 16px;
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
  margin: 2px;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.grey};
  width: 24px;
  height: 24px;

  @media (min-width: 800px) {
    width: 32px;
    height: 32px;
  }
`;

const DownloadCvButton = () => {
  return (
    <Button to="/desktop/avatar.png" target="_blank">
      <StyledText>cv</StyledText>
      <StyledIcon icon="download_48" />
    </Button>
  );
};

export default DownloadCvButton;
