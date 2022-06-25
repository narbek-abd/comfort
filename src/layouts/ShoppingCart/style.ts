import styled from "styled-components";
import { Button } from "../../components/Button/style";

export const ShoppingCart = styled.section`
	margin-top: 60px;
`;

export const ProductList = styled.div`
	${Button} {
		margin-top: ${49 + 15}px;
		margin-left: auto;
		display: block;
	}
`;
