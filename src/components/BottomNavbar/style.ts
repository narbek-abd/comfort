import styled, { css } from "styled-components";

export const MobileNav = styled.div`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: #fff;
  bottom: 0;
  border-top: 1px solid rgb(230, 230, 230);
  display: flex;

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;
export const MobileList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileItem = styled.span<{ active: number }>`
  text-align: center;

  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;
    color: ${(props) => (props.active ? "#7e33e0" : "#ccc")};
  }
`;
