import styled, { css } from "styled-components";

export const MenuItem = styled.li<{ focused: boolean }>`
	padding: 10px 7px;
	cursor: pointer;
	border-radius: 3px;

	${(props) =>
		props.focused &&
		css`
			color: #fff;
			background-color: var(--color-purple);
		`}
`;
