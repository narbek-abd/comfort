import styled from "styled-components";

export const Counter = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	input {
		font-size: 18px;
		text-align: center;
		cursor: pointer;
		width: 42px;
		height: 24px;
	}
	button {
		font-size: 18px;
		line-height: 24px;
		background: 0 0;
		padding: 0;
		text-align: center;
		cursor: pointer;
		width: 40px;
		height: 40px;
		border: 1px solid #d5d5d5;
		border-radius: 100%;
	}
`;

export const Warning = styled.div`
	position: absolute;
	bottom: -25px;
	left: 0;
`;
