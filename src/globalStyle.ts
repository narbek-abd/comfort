import styled, { createGlobalStyle, css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: ${1177 + 30}px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  @media only screen and (max-width: 1200px) {
    max-width: ${960 + 30}px;
  }
  @media only screen and (max-width: 992px) {
    max-width: ${720 + 30}px;
  }
  @media only screen and (max-width: 768px) {
    max-width: ${540 + 30}px;
  }
  @media only screen and (max-width: 576px) {
    max-width: auto;
  }
`;

export const SectionTitle = styled.h2`
  font-family: Josefin Sans;
  font-weight: bold;
  font-size: 42px;
  line-height: 42px;
  color: #1a0b5b;
  text-align: center;
`;

export const Logo = styled(Link)`
  svg {
    width: 98px;
    height: 34px;
    color: #0d0e43;
  }
`;

const ButtonColor = (color: string) => {
  switch (color) {
    case "pink":
      return "background-color: var(--color-pink);";
    case "red":
      return "background-color: #dc3545;";
    case "orange":
      return "background-color: #ffc107;";
  }
};

const ButtonSize = (color: string) => {
  switch (color) {
    case "big":
      return "padding: 17px 47px; font-size: 17px;";
    case "small":
      return "padding: .25rem .50rem; font-size: 12px;";
  }
};

export const Button = styled.button<{
  disabled?: boolean;
  color?: string;
  size?: string;
}>`
  ${({ size }) => ButtonSize(size)};
  ${({ color }) => ButtonColor(color)};
  display: inline-block;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #ffffff;
  border-radius: 3px;
  transition: all .2s linear;
  position: relative;

  ${(props) =>
    props.disabled &&
    css`
      filter: brightness(125%);
      cursor: default;
    `}
`;

Button.defaultProps = {
  color: "pink",
  size: "big",
};

export const Input = styled.input<{ square: any }>`
  padding: 0 15px;

  ${(props) =>
    props.square &&
    css`
      border: 2px solid #e7e6ef;
    `}
`;

export const Err = styled.span`
  display: block;
  margin-top: 3px;
  color: var(--color-pink);
  font-size: 12px;
`;
