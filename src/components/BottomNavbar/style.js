import styled, { css } from "styled-components/macro";

export const SMobileNav = styled.div`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgb(230, 230, 230);
  display: flex;

  @media only screen and (min-width:992px) {
    display: none;
  }
`;
export const SMobileList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SMobileItem = styled.span`
  width: 25%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;
    color: ${props => props.active ? "#7e33e0" : "#ccc"};
  }
`;
