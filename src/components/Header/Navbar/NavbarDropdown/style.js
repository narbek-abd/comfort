import styled, { css } from "styled-components/macro";


export const SDropdownList = styled.ul`
	position: absolute;
	z-index: 99;
	text-align: center;
	background-color: var(--color-purple);
	transition: all 0.26s ease;
	list-style-type: none;
	height: 0;
	overflow: hidden;

	@media only screen and (max-width: 768px) {
		position: static;
		overflow: hidden;
	}

	li a {
	color: #fff;
	margin-left: 0;
	}
`;




export const SDropdownToggle = styled.span`
	display: block;
	height: 50px;
	line-height: 50px;
	margin: 0 15px;
	color: #0D0E43;
	text-decoration: none;
	outline: 0;
	transition: all 0.5s linear;
	white-space: nowrap;
	transition: var(--color-tr);

	&:hover{
	color: var(--color-pink);
	}
`;
