import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarItem = styled.li`
	position: relative;
	display: inline-block;
	list-style: none;
	cursor: pointer;
	text-align: center;

	@media only screen and (max-width: 768px) {
		display: block;
	}
`;


export const NavbarLink = styled(Link)`
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



export const DropdownToggle = styled.span`
	display: block;
	height: 50px;
	line-height: 50px;
	padding: 0 15px;
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

	ul {
		top: 0;
		left: 87px;
	}
`;

export const Dropdown = styled.div`
	${NavbarLink} {
		margin: 0;
	}
`;
