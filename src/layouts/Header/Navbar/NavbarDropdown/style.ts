import styled, { css } from "styled-components";

export const DropdownList = styled.ul`
	position: absolute;
	z-index: 99;
	width: 100%;
	text-align: center;
	background-color: var(--color-purple);
	list-style-type: none;
	display: none;

	@media only screen and (max-width: 768px) {
		position: static;
	}

	span {
	color: #fff;
	}

	li a {
		color: #fff;
		margin-left: 0;
	}

	&:hover {
		ul {
			display: block;
		}
	}

	ul {
		top: 0;
		left: 87px;
	}
`;

export const DropdownToggle = styled.span`
	display: block;
	height: 50px;
	line-height: 50px;
	margin: 0 15px;
	color: #0d0e43;
	text-decoration: none;
	outline: 0;
	transition: all 0.5s linear;
	white-space: nowrap;
	transition: var(--color-tr);

	&:hover {
		color: var(--color-pink);
	}
`;
