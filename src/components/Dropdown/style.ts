import styled, { css } from "styled-components";

export const Dropdown = styled.div<{ position: string; opened: boolean }>`
	position: relative;
	span {
		cursor: pointer;
	}

	ul {
		display: none;
		position: absolute;
	}

	${(props) =>
		props.position === "right" &&
		css`
			ul {
				right: 0;
			}
		`}
`;
