import styled, { css } from "styled-components/macro";

export const Sinput = styled.input`
padding: 0 15px;

	${(props) =>
		props.square &&
		css`
			border: 2px solid #e7e6ef;
		`}
`;
