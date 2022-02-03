import styled, { css } from "styled-components/macro";

export const SInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	background-color: #fff;
	border-bottom: 2px solid red;
`;

export const SNavbarWrapper = styled.div`
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

export const SNavbar = styled.nav`
	@media only screen and (max-width:768px) {
		position: absolute;
		z-index: 99;
		left: -100%; 
		top: 0;
		transition: left .3s;
		background-color: #c1ea8f;
		padding: 20px 20px;
${(props) =>
	props.opened &&
	css`
		left: 0;
	`}
	`;

export const SDropdownList = styled.ul`
	position: absolute;
	z-index: 99;
	text-align: center;
	background-color: red;
	transition: all 0.26s ease;
	list-style-type: none;
	height: 0;
	overflow: hidden;

	@media only screen and (max-width: 768px) {
		position: static;
		overflow: hidden;
	}
`;

export const SNavbarItem = styled.li`
	position: relative;
	display: inline-block;
	list-style: none;
	cursor: pointer;

	@media only screen and (max-width: 768px) {
		display: block;
	}
`;

export const SNavbarLink = styled.a`
	display: block;
	height: 50px;
	line-height: 50px;
	margin: 0 15px;
	color: #000;
	text-decoration: none;
	outline: 0;
	transition: all 0.5s linear;
	white-space: nowrap;
`;
export const SDropdownToggle = styled(SNavbarLink)`
	cursor: pointer;
`;

export const SHamburger = styled.div`
	display: inline-block;
	position: relative;
	z-index: 100;
	cursor: pointer;
	display: none;
	width: 30px;
	height: 20px;

	span {
		display: block;
		width: 100%;
		height: 3px;
		background-color: rgb(100, 92, 92);
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
