import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<{ variant: string }>`
	border: 3px solid transparent;
	border-radius: 50%;
	display: inline-block;
	width: 60px;
	height: 60px;
	animation: ${spin} 2s linear infinite;
	border-top: 3px solid var(--color-pink);

	${(props) => {
		return (
			props.variant === "button" &&
			css`
				width: 15px;
				height: 15px;
				border-top: 3px solid #fff;
				position: absolute;
				top: calc(50% - 9px);
				left: calc(50% - 9px);
			`
		);
	}}
`;
