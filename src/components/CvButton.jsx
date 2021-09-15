import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 32px;
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 64px;
  height: 64px;
`;

const CvButton = () => {
  return (
    <>
      <Button>CV</Button>
    </>
  );
};

export default CvButton;
