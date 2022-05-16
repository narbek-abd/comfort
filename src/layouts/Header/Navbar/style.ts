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
	@media (max-width: 768px) {
		position: fixed;
		left: 0;
		top: 0;
		transform: translateX(-100%);
		z-index: 99;
		transition: transform 0.3s;

		${(props) =>
			props.opened &&
			css`
				transform: translateX(0);
			`}
	}
`;

export const NavbarList = styled.ul`
	display: flex;
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

	@media (max-width:768px) {
		display: block;
	}
`;
