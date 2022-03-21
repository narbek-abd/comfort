import styled from "styled-components";
import { Button } from "../../../../globalStyle";

export const Edit = styled.div`
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
`;

export const SelectGroup = styled(Group)`
	select {
		&:not(:first-child) {
			margin-top: 15px;
		}
	}
`;

export const CategoryInf = styled(Group)`
	font-size: 13px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
