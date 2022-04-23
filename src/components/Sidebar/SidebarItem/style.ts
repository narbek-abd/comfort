import styled from "styled-components";

export const Name = styled.div`
    border-radius: 10px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #3333332e;
    }

    cursor: pointer;

    svg {
        margin-right: 5px;
    }
`;

export const SidebarItem = styled.li`
    svg {
        margin-right: 9px;
    }

    a,
    span {
        padding: 10px;
        width: 100%;

        color: black;
        display: block;
    }
`;

export const SidebarSub = styled.ul`
    z-index: 99;
    width: 100%;
    display: none;
    padding-left: 30px;
`;
