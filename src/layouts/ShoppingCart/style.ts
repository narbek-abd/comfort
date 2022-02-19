import styled from "styled-components";
import { Button } from "../../globalStyle";
import { Link } from "react-router-dom";

export const ShoppingCart = styled.div`
	margin-top: 257px;
`;

export const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
export const ProductList = styled.div``;

export const Left = styled.div`
	flex-basis: 702px;
	${Button} {
		margin-top: ${49 + 15}px;
		margin-left: auto;
		display: block;
	}

	@media only screen and (max-width: 768px) {
		flex-basis: 100%;
	}
`;

export const Right = styled.div`
	flex-basis: 370px;
`;

export const CartEmpty = styled.div`
	text-align: center;
`;
