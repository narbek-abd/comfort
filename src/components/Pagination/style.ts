import styled from "styled-components";

export const Pagination = styled.ul`
	display: flex;
	justify-content: center;
`;

export const Item = styled.li<{ active?: boolean }>`
	display: flex;
	button {
		cursor: pointer;
		border-radius: 3px;
		margin: 0 3px;
		color: #fff;
		background-color: ${(props) =>
			props.active ? "var(--color-pink)" : "#D06593A1"};
		padding: 0.375rem 0.75rem;
	}

	span {
		margin-bottom: 5px;
	}
`;
