import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StyledButton, {
  FancyButton,
  ButtonTwo,
  SubmitButton,
  AnimatedLogo,
  DarkButton,
} from "./Button/Button";
import Logo from "../../logo.svg";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFFamily: "Segoe UI",
};

const GlobalStyles = createGlobalStyle`
  button{
    font-family: ${(props) => props.theme.fontFFamily};
    letter-spacing: 5px;
  }
`;

const FirstStyle = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>styling from styled components...</h1>
        <br />
        <button>Button</button>
        <br />
        <br />
        <StyledButton type="submit">button</StyledButton>
        <br />
        <br />
        <StyledButton variant="outline">button</StyledButton>
        <br />
        <br />
        <FancyButton>fancy button</FancyButton>
        <br />
        <br />
        <ButtonTwo as="a">Button Two</ButtonTwo>
        <br />/
        <br />
        <SubmitButton>Submit</SubmitButton>
        <br />
        <AnimatedLogo src={Logo} />
        <br />
        <DarkButton>Dark Button</DarkButton>
      </ThemeProvider>
    </>
  );
};

export default FirstStyle;
