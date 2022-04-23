import styled from "styled-components";

export const CartProductItem = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	line-height: 14px;
	color: #000000;
	position: relative;

	&:not(:first-child) {
		margin-top: 30px;
	}
	&:after {
		content: "";
		position: absolute;
		bottom: -15px;
		width: 100%;
		border: 1px solid #e1e1e4;
	}
`;

export const ProductImg = styled.div`
	overflow: hidden;
	position: relative;
	width: 83px;
	height: 87px;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const Inf = styled.div`
	margin-left: 17px;
	span {
		display: block;
	}
`;

export const Name = styled.div`
	margin-top: 4px;
	white-space: nowwrap;
`;

export const Price = styled.div`
	margin-top: 4px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 87px;
	margin-left: auto;
	@media only screen and (max-width: 576px) {
		flex-direction: column-reverse;
	}
`;

export const CurrentPrice = styled.div`
	margin-left: 90px;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

export const Count = styled.div`
	margin-left: 122px;

	@media only screen and (max-width: 768px) {
		margin-left: 70px;
	}
	@media only screen and (max-width: 576px) {
		margin-left: 0;
	}
`;

export const Total = styled.div`
	margin-left: 140px;
	@media only screen and (max-width: 768px) {
		margin-left: 70px;
	}
	@media only screen and (max-width: 576px) {
		margin-left: 0;
	}
`;

export const RemoveProductBtn = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	background-color: #000;
	width: 15px;
	height: 15px;
	color: #fff;
	border-radius: 100px;
	text-align: center;
	font-size: 12px;
	cursor: pointer;
`;
