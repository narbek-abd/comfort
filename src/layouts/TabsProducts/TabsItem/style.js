import styled from "styled-components/macro";

export const StabsItem = styled.p`
	margin: 0 30px;
	color: ${props => props.active
		? "var(--color-pink)"
		: "var(--color-dark-blue)"};
	font-family: Lato;
	font-weight: normal;
	font-size: 18px;
	line-height: 22px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;