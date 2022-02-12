import styled from "styled-components";
import { Container } from "../../globalStyle";

export const CatalogMenu = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "flex" : "none")};

  position: fixed;
  min-height: 80vh;
  width: 80%;
  max-width: 1207px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  background-color: #fff;
`;

export const MenuList = styled.ul`
  width: 195px;
  width: 308px;
  height: 100%;
  flex-shrink: 0;
  padding: 20px 0 20px 30px;
  padding-right: 0px;
  overflow: auto;
`;

