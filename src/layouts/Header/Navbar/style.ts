import styled, { css } from "styled-components";

export const NavbarWrapper = styled.div<{ active: boolean }>`
	${(props) =>
		props.active &&
		css`
			position: fixed;
			z-index: 99;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.53);
		`}
`;

export const Navbar = styled.nav<{ opened: boolean }>`
	&>ul {
		display: flex;
	}
	.catalog-menu {
		span {
			display: block;
			height: 50px;
			line-height: 50px;
			margin: 0 15px 0 45px;
			color: var(--color-pink);
			text-decoration: none;
			outline: 0;
			transition: all 0.5s linear;
			white-space: nowrap;
			cursor: pointer;
			transition: var(--color-tr);
	}
} 

	@media only screen and (max-width:768px) {
		position: fixed;
		z-index: 99;
		left: -100%;
		top: 0;
		transition: left .3s;
		background-color: #fff;
		padding: 20px 20px;

		${(props) =>
			props.opened &&
			css`
				left: 0;
			`}

	@media only screen and (max-width:768px) {
		padding: 0;
	}
	`;

export const Hamburger = styled.div<{ crossed: boolean }>`
	display: inline-block;
	position: relative;
	z-index: 100;
	cursor: pointer;
	display: none;
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 30px;
	height: 20px;

	span {
		display: block;
		width: 100%;
		height: 3px;
		background-color: var(--color-pink);
		transition: all 0.2s linear;
		position: absolute;

		&::first-child {
			top: 0;
		}

		&:nth-child(2) {
			top: calc(50% - 2px);
		}

		&:nth-child(3) {
			bottom: 0;
		}
	}

	${(props) =>
		props.crossed &&
		css`
			span {
				&:first-child {
					top: 50%;
					transform: rotate(-45deg);
				}

				&:nth-child(2) {
					display: none;
				}

				&:nth-child(3) {
					top: 50%;
					transform: rotate(45deg);
				}
			}
		`}

	@media only screen and (max-width:768px) {
		display: block;
	}
`;
