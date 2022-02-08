import styled from "styled-components/macro";
import { SName } from "../ProductCard/style";

export const SFeaturedProducts = styled.section`
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

export const SInner = styled.div`
	margin-top: 48px;

	${SName} {
		color: var(--color-pink);
	}
`;
