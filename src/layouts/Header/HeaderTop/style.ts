import styled, { css } from "styled-components";

export const HeaderTop = styled.div`
	background-color: var(--color-purple);

	@media only screen and (max-width: 576px) {
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

export const UserButton = styled.div`
	display: flex;
	align-items: center;
	svg {
		margin-left: 5px;
	}

	.dropdown {
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
		span {
			padding-right: 16px;
		}
		a {
			padding-right: 16px;
		}
		&:last-child {
			a {
				padding-right: 0;
				padding-left: 10px;
			}
		}
	}
	ul {
		background-color: #7e33e0;
		z-index: 1;
	}

	@media only screen and (max-width: 992px) {
		display: none;
	}
`;
