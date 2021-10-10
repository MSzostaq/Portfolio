import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import Main from "components/Main";

const Wrapper = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
