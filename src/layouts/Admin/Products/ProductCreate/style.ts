import styled from "styled-components";
import { Button } from "../../../../globalStyle";

export const Create = styled.div`
	form {
		margin-top: 15px;
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

	${Button} {
		margin-top: 10px;
	}

	@media (max-width:576px) {
		width: 100%;
	}
`;

export const SelectGroup = styled(Group)`
	select {
		&:not(:first-child) {
			margin-top: 15px;
		}
	}
`;
