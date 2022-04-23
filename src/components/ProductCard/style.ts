import styled, { css } from "styled-components";
import { Button } from '../Button/style';

export const Actions = styled.div`
	opacity: 0;
	visibility: 0;
	position: absolute;
	top: 174px;
	left: 11px;
	display: flex;
	flex-direction: column;
	transition: var(--opacity-tr);

	${Button} {
		padding: 10px;
		cursor: pointer;
		margin-bottom: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
	}

	svg {
		color: #fff;
		width: 19px;
		height: 19px;
		&:not(:last-child) {
			margin-bottom: 14px;
		}
	}
`;

export const Img = styled.div`
	height: 269.96px;
	position: relative;
	overflow: hidden;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const ProductCard = styled.div<{ variant: string }>`
	position: relative;
	&:hover {
		background-color: #ebf4f3;
		${Actions} {
			opacity: 1;
			visibility: 1;
		}
	}

	${(props) =>
		props.variant === "horizontal" &&
		css`
			height: 230px;

			a {
				display: flex;

				${Img} {
					height: 197px;
					width: 284px;
				}

				${Inf} {
					margin-left: 30px;
				}
			}

			${Actions} {
				bottom: 28px;
				left: 312px;
				flex-direction: row;
				opacity: 1;
				span {
					margin-bottom: 0;
					margin-right: 3px;
				}
			}

			@media only screen and (max-width: 576px) {
				margin-bottom: 30px;
				height: auto;

				a {
					display: block;
					${Img} {
						width: auto;
						height: 269.96px;
					}

					${Inf} {
						margin-left: 0;
					}
				}

				${Actions} {
					bottom: 0;
					left: 11px;
					flex-direction: column;
					opacity: 0;
					svg {
						margin-right: 0;
					}
				}
			}
		`}
`;

export const Inf = styled.div`
	color: var(--color-dark-blue);
	margin-top: 30px;
`;
export const Name = styled.p`
	font-family: Josefin Sans;
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	display: block;
	width: 100%;
`;
export const Price = styled.div`
	font-family: Josefin Sans;
	text-align: center;
	margin-top: 15px;
`;
export const PriceNew = styled.span`
	font-size: 14px;
`;
export const PriceOld = styled.span`
	font-size: 12px;
	color: #fb2448;
	margin-left: 10px;
	text-decoration-line: line-through;
`;
