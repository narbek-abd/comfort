import styled, { css } from "styled-components";

export const MenuSub = styled.ul<{ active: boolean; prev: boolean }>`
    position: absolute;
    top: 0;
    z-index: 1;
    transition: all .3s ease;
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    background-color: #fff;

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

export const MenuSubPrev = styled.li`
    cursor: pointer;
    padding: 10px 0;
    font-size: 14px;
    margin-left: -4px;

    svg {
        color: #000;
        transform: rotate(90deg);
    }
`;
