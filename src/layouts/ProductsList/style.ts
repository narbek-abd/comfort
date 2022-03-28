import styled from "styled-components";
import { ProductCard } from "../../components/ProductCard/style";
import { Pagination } from "../../components/Pagination/style";
import { Spinner } from "../../components/Spinner/style";

export const ProductsList = styled.div`
	${Pagination} {
		justify-content: center;
		margin-top: 60px;
	}
`;


export const ProductsBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
`;



export const List = styled.div`
	flex: 0 0 921px;
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: space-between;

	${ProductCard} {
		width: 32%;
		margin-bottom: 50px;
	}

	${Spinner} {
		margin: 30px auto 0 auto;
	}
`;

