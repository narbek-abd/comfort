import styled from "styled-components";

export const ProductsList = styled.div`
	margin-bottom: 20px;

	@media only screen and (max-width: 576px) {
		overflow-x: scroll;
	}
`;
export const Products = styled.div`
	table {
		width: 100%;
		margin-bottom: 30px;
	}

	margin: 0 -10px;

	@media only screen and (max-width: 576px) {
		margin: 0;
	}
`;
