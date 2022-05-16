import styled from "styled-components";

export const Orders = styled.section`
	margin-top: 60px;
	table {
		margin: 0 auto 30px auto;
	}
`;

export const OrdersList = styled.div`
	margin-bottom: 40px;

	@media (max-width: 576px) {
		overflow-x: scroll;
	}
`;
