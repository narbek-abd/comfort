import styled, { css } from "styled-components";

export const MenuSub = styled.ul<{ active: boolean; prev: boolean }>`
    position: absolute;
    top: 0;
    background-color: #fff;
    z-index: 1;
    transition: all 0.8s ease;
    transform: translateX(100%);
    background-color: #fff;
    width: 100%;
    height: 100%;

     ${(props) =>
        props.prev &&
        css`
            transform: translateX(-100%);
        `}

    ${(props) =>
        props.active &&
        css`
            transform: translateX(0);
            z-index: 2;
            overflow: visible;
            opacity: 1;
        `}

   
`;
