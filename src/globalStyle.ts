import styled, { createGlobalStyle, css } from "styled-components";
import { Link } from 'react-router-dom';

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

export const Button = styled.button<{disabled?: boolean}>`
  padding: 17px 47px;
  background-color: var(--color-pink);
  display: inline-block;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #ffffff;

  ${props => props.disabled && css`
    background-color: black;
   `

  }
`;

export const Input = styled.input<{ square: any}>`
  padding: 0 15px;

  ${(props) =>
    props.square &&
    css`
      border: 2px solid #e7e6ef;
    `}
`;
