import styled from "styled-components";
import { CatalogMenu } from '../../../components/CatalogMenu/style';

export const CatalogBar = styled.li`
	span {
		display: block;
		height: 50px;
		line-height: 50px;
		margin: 0 15px 0 45px;
		color: var(--color-pink);
		text-decoration: none;
		outline: 0;
		transition: all 0.5s linear;
		white-space: nowrap;
		cursor: pointer;
		transition: var(--color-tr);
	}
`;

export const Wrapper = styled.div`
	${CatalogMenu} {
		top: 50px;
	}
`;
