import styled, { css } from "styled-components";

export const Alert = styled.div<{ variant: string }>`
	padding: 16px 50px 16px 16px;
	border-radius: 0.25rem;
	position: relative;

	button {
		position: absolute;
		top: calc(50% - 18px);
		right: 0;
		z-index: 2;
		padding: 10px;
		background-color: transparent;
		color: #333;
	}

	${(props) => {
		return (
			props.variant === "error" &&
			css`
				color: #842029;
				background-color: #f8d7da;
				border-color: #f5c2c7;
			`
		);
	}}

	${(props) => {
		return (
			props.variant === "success" &&
			css`
				color: #0f5132;
				background-color: #d1e7dd;
				border-color: #badbcc;
			`
		);
	}}

${(props) => {
		return (
			props.variant === "warning" &&
			css`
				border-color: rgb(255, 244, 229);
				background-color: rgb(255, 244, 229);
				color: rgb(102, 60, 0);
			`
		);
	}}
`;

export const Inner = styled.div``;
