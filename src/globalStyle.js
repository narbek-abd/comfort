import styled, { createGlobalStyle, css } from "styled-components";

export const SContainer = styled.div`
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
color: #1A0B5B;
text-align: center;
`;




export const SLogo = styled.a`
  svg {
    width: 98px;
    height: 34px;
    color: #0d0e43;
  }
`;

export const SButton = styled.button`
  padding: 17px 47px;
  background-color: var(--color-pink);
  display: inline-block;
  text-align: center;
  font-family: Josefin Sans;
font-weight: 600;
font-size: 17px;
line-height: 17px;
letter-spacing: 0.02em;
color: #FFFFFF;
`;



export const SInput = styled.input`
padding: 0 15px;

  ${(props) =>
    props.square &&
    css`
      border: 2px solid #e7e6ef;
    `}
`;
