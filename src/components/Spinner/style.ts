import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<{ variant: string }>`
	border: 3px solid transparent;
	border-radius: 50%;
	display: inline-block;
	width: 15px;
	height: 15px;
	animation: ${spin} 2s linear infinite;

	${(props) => {
		return (
			props.variant === "white" &&
			css`
				border-top: 3px solid #fff;
			`
		);
	}}

	${(props) => {
		return (
			props.variant === "pink" &&
			css`
				border-top: 3px solid var(--color-pink);
			`
		);
	}}
`;
