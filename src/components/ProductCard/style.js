import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

export const SActions = styled.div`
	opacity: 0;
	visibility: 0;
	position: absolute;
	top: 174px;
	left: 11px;
	display: flex;
	flex-direction: column;
	transition: var(--opacity-tr);

	svg {
		cursor: pointer;
		color: var(--color-dark-blue);
		width: 19px;
		height: 19px;
		&:not(:last-child) {
			margin-bottom: 14px;
		}
	}
`;

export const SProductCard = styled.div`
	position: relative;
	&:hover {
		background-color: #ebf4f3;
		${SActions} {
			opacity: 1;
			visibility: 1;
		}
	}
`;
export const SImg = styled.div`
	height: 269.96px;
	position: relative;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
export const SInf = styled.div`
	color: var(--color-dark-blue);
`;
export const SName = styled.p`
	font-family: Josefin Sans;
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	display: block;
	width: 100%;
`;
export const SPrice = styled.div`
	font-family: Josefin Sans;
	text-align: center;
	margin-top: 15px;
`;
export const SPriceNew = styled.span`
	font-size: 14px;
`;
export const SPriceOld = styled.span`
	font-size: 12px;
	color: #fb2448;
	margin-left: 10px;
	text-decoration-line: line-through;
`;
