import styled from "styled-components";

export const WishlistItem = styled.div`
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

	a {
		display: flex;
		align-items: center;
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
	display: flex;
	span {
		margin-right: 28px;
		display: block;
	}
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
