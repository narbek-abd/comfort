import styled from "styled-components";
import { Button } from "../../../../globalStyle";

export const Create = styled.div`
form {
	margin-top: 10px;
}

${Button} {
	display: flex;
	align-items:center;
	margin-top: 20px;
	span {
		padding-right: 10px;
	}
 `;

export const Group = styled.div`
	width: 300px;

	&:not(:first-child) {
		margin-top: 30px;
	}

	input,
	select {
		width: 100%;
		border: 1px solid #333;
		border-radius: 3px;
		padding: 10px;
	}

	span {
		display: block;
		margin-top: 3px;
		color: var(--color-pink);
		font-size: 12px;
	}
`;
export const Inner = styled.div``;
