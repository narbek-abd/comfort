import styled, { createGlobalStyle } from "styled-components";

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

export const SBtn = styled.a`
  padding: 17px 47px;
  background-color: #ff9700;
  color: #fff;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
`;


export const SLogo = styled.a`
svg {
  width: 98px;
  height: 34px;
  color: #0D0E43;
}
`;
