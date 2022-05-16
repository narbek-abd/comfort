import styled, { css } from "styled-components";

export const ProductGallery = styled.div`
	display: flex;

	@media (max-width:992px) {
		display: block;
	}
`;

const imageContainer = css`
	overflow: hidden;
	border-radius: 3px;
	position: relative;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const Left = styled.div`
.swiper-slide {
	@media (max-width:992px) {
		width: 72%;
	}

	@media (max-width:778px) {
		width: 90%;
	}
}
	.swiper-button-prev,
	.swiper-button-next {
		width: 30px;
		height: 30px;
		background-color: #0000004f;
		color: #fff;
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		margin: 30px auto;

		&.swiper-button-disabled {
			background-color: #fff;
			svg {
				color: #fff;
			}
		}

		@media (max-width:992px) {
			display: none
		}
	}

	.swiper-button-prev {
		transform: rotate(180deg);
	}
`;

export const ImgWrap = styled.div<{ active: boolean }>`
	${imageContainer}

	position: relative;
	width: 150px;
	height: 155px;
	cursor: pointer;
	border: 2px solid transparent;
	border-color: ${(props) =>
		props.active ? "var(--color-pink)" : "transprent"};
	border-radius: 4px;
	img {
		border-radius: 4px;
	}

	@media (max-width:992px) {
			width: 500px;
			height: 100%;
			border-color: transparent;
	}
	@media (max-width:768px) {
		width: 100%;
	}
`;

export const Right = styled.div`
	margin-left: 21px;
	@media (max-width:992px) {
		display: none;
	}
`;


