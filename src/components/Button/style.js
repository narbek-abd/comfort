import styled from "styled-components";

export const Button = styled.button`
	font-size: ${(props) => (props.size === "small" ? "15px" : "17px")};
	font-weight: 600;
	color: #fff;
	background-color: var(--color-pink);
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
		opacity: ${(props) => props.isLoading ? "0" : "1"}
	}
`;

export const ButtonWarning = styled(Button)`
	background-color: #ffc107;
`;

export const ButtonDanger = styled(Button)`
	background-color: #dc3545;
`;
