import styled from "styled-components";

export const Pagination = styled.ul`
	display: flex;
`;

export const Item = styled.ul<{ active?: boolean }>`
	margin: 0 3px;
	a {
		color: #fff;
		background-color: ${(props) =>
			props.active ? "var(--color-pink)" : "#D06593A1"};
		padding: 0.375rem 0.75rem;
	}
`;
