import styled from "styled-components";
import {Dropdown} from 'components/Dropdown/style';

export const HeaderTop = styled.div`
	background-color: var(--color-purple);

	@media (max-width: 576px) {
		display: none;
	}
`;

export const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 44px;
	a,
	span,
	li {
		color: #f1f1f1;
		font-family: Josefin Sans;
		font-weight: 600;
		font-size: 16px;
		height: 100%;
		display: block;
	}
	svg {
		color: #f1f1f1;
	}
`;

export const Left = styled.div`
	display: flex;
	height: 100%;
	line-height: 44px;

	div {
		a {
			line-height: 44px;
			font-family: Lato;
			font-weight: bold;
		}
		svg {
			margin-right: 12px;
		}
		&:not(:first-child) {
			margin-left: 48px;
		}
	}
`;

export const CartCount = styled.p`
	position: absolute;
	top: 0;
	right: -7px;
	padding-right: 0;
	font-size: 12px;
	background-color: var(--color-dark-blue);
	border-radius: 100px;
	height: 16px;
	width: 16px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		font-size: 12px;
	}
`;

export const UserButton = styled.div`
	display: flex;
	align-items: center;
	a {
		position: relative;
	}
	svg {
		margin-left: 5px;
	}

	${Dropdown} {
		svg {
			width: 24px;
			height: 24px;
			margin-left: 0px;
		}
	}
	li {
		padding: 5px 7px;
		height: auto;
	}
	span {
		height: 100%;
		display: block;
		cursor: pointer;
	}
	.icon-basket {
		width: 24px;
		height: 24px;
	}
`;

export const Right = styled.div`
	display: flex;
	height: 100%;
	line-height: 44px;
	justify-content: space-between;
	${UserButton} {
		margin-left: 16px;

		${CartCount} {
			span {
				height: auto;
			}
		}
	}
	ul {
		background-color: #7e33e0;
		z-index: 2;
	}

	${Dropdown} {
		ul {
			width: 100px;
			li {
				cursor: pointer;
			}
		}
	}

	@media (max-width: 992px) {
		display: none;
	}
`;
