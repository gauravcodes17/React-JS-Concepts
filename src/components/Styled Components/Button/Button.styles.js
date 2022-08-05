import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#fff")};
  padding: 6px 22px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: ${(props) => (props.variant === "outline" ? "600" : "400")};
  cursor: pointer;
  transition: 0.3s all ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? "#4caf50" : "#fff")};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda886 100%);
  border: none;
  font-size: 24px;
`;

export const ButtonTwo = styled(StyledButton)`
  border: 2px solid purple;
  background-color: purple;
  &:hover {
    background-color: #fff;
    color: purple;
  }
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    box-shadow: 0 5px #666;
    transform: translate(4px);
  }
`;

const rotate = keyframes`
  from{
      transform: rotate(0deg);
  }
  to{
      transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 10s linear;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
