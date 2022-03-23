import styled, { css } from "styled-components";
import { Spinner } from "../Spinner/style";

export const Button = styled.button<{
	size?: string;
	isLoading?: boolean;
	color?: string;
	variant?: string;
}>`
	font-size: ${(props) => (props.size === "small" ? "15px" : "17px")};
	font-weight: 600;
	color: #fff;
	border-radius: 3px;
	padding: ${(props) => (props.size === "small" ? "6px 12px" : "17px 47px")};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	opacity: ${(props) => (props.disabled ? "0.8" : "1")};
	transition: all 0.2s ease-in-out;
	position: relative;

	span {
		opacity: ${(props) => (props.isLoading ? "0" : "1")};
	}

	/** Contained styles */

	${(props) =>
		props.variant === "contained" &&
		css`
			background-color: var(--color-pink);
		`}

	${(props) =>
		props.variant === "contained" &&
		props.color === "warning" &&
		css`
			background-color: #ffc107;
		`}

	${(props) =>
		props.variant === "contained" &&
		props.color === "danger" &&
		css`
			background-color: #dc3545;
		`}




	/** Outlined styles */
	
		${(props) =>
		props.variant === "outlined" &&
		css`
			border: 2px solid var(--color-pink);
			color: var(--color-pink);
		`}

	${(props) =>
		props.variant === "outlined" &&
		props.color === "warning" &&
		css`
			border: 2px solid #ffc107;
			color: #ffc107;

			${Spinner} {
				border-top-color: #ffc107;
			}
		`}

		${(props) =>
		props.variant === "outlined" &&
		props.color === "danger" &&
		css`
			border: 2px solid #dc3545;
			color: #dc3545;

			${Spinner} {
				border-top-color: #dc3545;
			}
		`}
`;
