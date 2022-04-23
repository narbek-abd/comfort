import styled from "styled-components";

export const BreadCrumbs = styled.nav`
	margin: 35px 0;
 `;

export const BreadCrumbItem = styled.li`
	display: inline-block;
	margin-right: 5px;

	a {
		font-family: "Lato";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		color: #000;

		span {
			margin-right: 5px;
		}
	}
`;

export const Active = styled.span`
	color: var(--color-pink);
`;
