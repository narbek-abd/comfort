import styled from "styled-components";
import { SectionTitle } from "globalStyle";
import { Button } from "components/Button/style";

export const Footer = styled.footer`
	flex-shrink: 0;
	margin-top: 50px;
	background-color: var(--color-dark-blue);
	padding: 24px 0;

	@media (max-width: 992px) {
		padding-bottom: 74px;
	}
`;

export const Copyright = styled.div`
	color: #fff;
`;
