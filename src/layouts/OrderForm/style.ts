import styled from "styled-components";
import { Button } from "../../components/Button/style";

export const OrderForm = styled.div`
	margin-top: 60px;
	color: var(--color-dark-blue);
`;

export const FormHeader = styled.div``;

export const Group = styled.div`
	margin-top: 20px;
	input {
		padding: 7px 7px 14px 7px;
		border-bottom: 2px solid #bfc6e0;
		width: 100%;
	}

	${Button} {
		margin-top: 40px;
	}
`;
