import styled, { css } from "styled-components";


export const NavbarItem = styled.li`
	position: relative;
	display: inline-block;
	list-style: none;
	cursor: pointer;

	@media only screen and (max-width: 768px) {
		display: block;
	}
`;


export const NavbarLink = styled.a`
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