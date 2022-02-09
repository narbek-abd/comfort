import styled from "styled-components";
import { Name } from "../../components/ProductCard/style";

export const FeaturedProducts = styled.section`
	margin-top: 130px;

	.swiper-pagination {
		position: static;
		margin-top: 53px;
	}

	.swiper-pagination-bullets .swiper-pagination-bullet {
		width: 16px;
		height: 4px;
		background: #fb2e86;
		border-radius: 10px;
		&.swiper-pagination-bullet-active {
			width: 24px;
		}
	}
`;

export const Inner = styled.div`
	margin-top: 48px;

	${Name} {
		color: var(--color-pink);
	}
`;
