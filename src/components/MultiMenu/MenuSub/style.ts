import styled, { css } from "styled-components";

export const MenuSub = styled.ul<{ active: boolean }>`
    position: absolute;
    // left: 100%;
    top: 0;
    background-color: #fff;
    z-index: 1;
    transition: all 0.8s ease;
    transform: translateX(-100%);
    background-color: #fff;

    ${(props) =>
        props.active &&
        css`
            width: 100%;
            height: 100%;
            transform: translateX(0);
            left: 0;
            z-index: 2;
            overflow: visible;
            opacity: 1;

            & + ul {
                transition: none;
                opacity: 0;
                overflow: hidden;
                transform: translateX(100%);
            }
        `}
`;
