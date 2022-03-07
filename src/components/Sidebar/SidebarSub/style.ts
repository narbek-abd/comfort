import styled from "styled-components";

export const Name = styled.div`
	padding: 10px;
	&:hover {
		background-color: #3333332e;
	}
	cursor: pointer;

	svg {
		margin-right: 5px;
	}
`;

export const SidebarSub = styled.ul`
	z-index: 99;
	width: 100%;
	display: none;
	padding-left: 30px;
`;
