import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Loader = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 100px;
	border: 2px solid transparent;
	border-top-color: var(--color-pink);
	border-bottom-color: var(--color-dark-blue);
	animation: ${spin} 0.4s linear infinite;
`;
