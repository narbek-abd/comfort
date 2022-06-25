import styled from "styled-components";
import { Container } from "../../globalStyle";
import { Button } from '../../components/Button/style';

export const ProductMain = styled.section`
	margin-top: 150px;

	@media (max-width: 992px) {
		${Container} {
			padding: 0;
			max-width: 1500px;
		}
	}
`;

export const Inner = styled.div`
	display: flex;

	@media (max-width: 992px) {
		display: block;
	}
`;

export const Left = styled.div`
	width: 547px;
	@media (max-width: 992px) {
		width: auto;
	}
`;

export const Right = styled.div`
	color: var(--color-dark-blue);
	font-family: Josefin Sans;
	font-weight: 600;
	margin-left: 44px;
`;

export const Name = styled.h3`
	font-size: 36px;
	line-height: 36px;
	color: #0d134e;
	margin-top: 74px;
`;

export const Rating = styled.div`
	margin-top: 13px;
	font-family: Josefin Sans;
	font-weight: 100;
	font-size: 14px;
	line-height: 29px;
	display: flex;
`;

export const Stars = styled.div`
	margin-right: 5px;
`;

export const Price = styled.div`
	font-family: Josefin Sans;
	font-weight: 100;
	font-size: 16px;
	line-height: 29px;
	color: var(--color-dark-blue);

	span {
		margin-left: 32px;
		text-decoration-line: line-through;
		color: #fb2e86;
	}
`;

export const Color = styled.div`
	margin-top: 12px;
	line-height: 16px;
	span {
		margin-right: 8px;
	}
`;

export const Desc = styled.p`
	margin-top: 12px;
	font-size: 16px;
	line-height: 29px;
	color: #a9acc6;
`;

export const Actions = styled.div`
	margin-top: 34px;
	display: flex;
	align-items: center;
`;

export const Like = styled.div`
	cursor: pointer;
	${Button} {
	padding: 17px 25px;
		background-color: transparent;
		border: none;
	}
`;

export const Categories = styled.div`
	margin-top: 17px;
	display: flex;

	div {
		margin-left: 16px;
	}
`;
