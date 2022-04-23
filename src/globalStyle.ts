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

export const Button = styled.input<{ square: boolean }>``;


export const Checkbox = styled.div`
  position: relative;
  cursor: pointer;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked ~ label {
      &:before {
        background-color: var(--color-pink);
        border-color: transparent;
      }
      &:after {
        display: block;
      }
    }
  }

  label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    user-select: none;
    &:before {
      content: "";
      width: 22px;
      height: 22px;
      border-radius: 6px;
      border: 1px solid #d5d5d5;

      display: inline-block;
      flex-shrink: 0;
      flex-grow: 0;
      margin-right: 0.5em;
    }

    &:after {
      content: "";
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      position: absolute;
      transform: rotate(45deg);
      display: none;
      width: 4px;
      height: 10px;
      top: 3px;
      left: 8px;
      box-sizing: content-box;
    }
  }
`;

export const Err = styled.span`
  display: block;
  margin-top: 3px;
  color: var(--color-pink);
  font-size: 12px;
`;

export const Close = styled.span`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;
