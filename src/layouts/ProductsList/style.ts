import styled, { css } from "styled-components";
import { ProductCard } from "components/ProductCard/style";
import { Pagination } from "components/Pagination/style";
import { Spinner } from "components/Spinner/style";
import { Button } from 'components/Button/style';

export const ProductsList = styled.section`
	margin-top: 126px;

	${Pagination} {
		justify-content: center;
		margin-top: 60px;
	}
`;

export const ProductsBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 60px;
`;

export const List = styled.div<{ variant: string }>`
	width: calc(100% - 300px);
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: space-between;

	${ProductCard} {
		width: 32%;
		margin-bottom: 50px;

		@media (max-width: 1200px) {
			width: 49%;
		}

		@media (max-width: 992px) {
			width: 32%;
		}

		@media (max-width: 576px) {
			width: 49%;
		}
		@media (max-width: 480px) {
			width: 100%;
		}
	}

	${Spinner} {
		margin: 30px auto 0 auto;
	}

	${(props) =>
		props.variant === "horizontal" &&
		css`
			${ProductCard} {
				width: 100%;
				@media (max-width: 576px) {
					width: 49%;
				}

				@media (max-width: 480px) {
					width: 100%;
				}
			}

			${Button} {
				margin-right: 8px;
			}
		`}

	@media (max-width:992px) {
		width: 100%;
	}
`;
