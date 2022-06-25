import styled from "styled-components";
import {Dropdown} from '../../../components/Dropdown/style';

export const Sort = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SortLeft = styled.div`
	p {
		font-family: "Josefin Sans";
		font-weight: 700;
		font-size: 22px;
		line-height: 22px;
		color: #151875;
	}
	span {
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		color: #8a8fb9;
		margin-top: 8px;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const SortRight = styled.div`
	display: flex;

	div {
		&:not(:last-child) {
			margin-right: 33px;
		}
	}
	> div {
		display: flex;
		p,
		svg {
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;
			color: #3f509e;
			margin-right: 4px;
		}

		svg {
			height: 19px;
			color: var(--color-dark-blue);
			cursor: pointer;
		}
	}

	${Dropdown} ul {
		margin-top: 10px;
		width: 170px;
		background-color: #3333331c;
		border-radius: 3px;
		li {
			cursor: pointer;
			padding: 7px;
		}
	}
`;
