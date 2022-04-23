import styled, { css } from "styled-components";

export const MenuToggler = styled.p`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
`;

export const MenuItem = styled.li`
	cursor: pointer;

	&:hover {
		background-color: #33333330;
	}

	a {
		display: block;
		padding: 10px 20px;
	}

	span,
	a {
		color: #000;
		font-size: 14px;
	}

	svg {
		margin-right: 10px;
		transform: rotate(-90deg);
	}
`;

export const MenuSub = styled.ul<{ isActive: boolean; isPrev: boolean }>`
	position: absolute;
	top: 0;
	z-index: 1;
	transition: all .3s ease;
	transform: translateX(100%);
	width: 100%;
	height: 100%;
	background-color: #fff;

	${(props) =>
		props.isPrev &&
		css`
			transform: translateX(-100%);
		`}

	${(props) =>
		props.isActive &&
		css`
			transform: translateX(0);
			z-index: 2;
			overflow: visible;
			opacity: 1;
		`}
`;

export const MenuSubPrev = styled.li`
	cursor: pointer;
	padding: 10px 20px;
	font-size: 14px;
	margin-left: -4px;

	svg {
		color: #000;
		transform: rotate(90deg);
	}
`;
