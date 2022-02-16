import styled, { css } from "styled-components";

export const ProductGallery = styled.div`
	display: flex;
`;

const imageContaienr = css`
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
		${imageContaienr}
		width: 150px;
		height: 155px;
	}
`;

export const Right = styled.div`
	margin-left: 21px;
`;


export const MainImg = styled.div`
	width: 375px;
	 height: 487px;
	 ${imageContaienr}
`;


