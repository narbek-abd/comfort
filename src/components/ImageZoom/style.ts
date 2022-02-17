import styled from "styled-components";

export const ImageZoom = styled.div`
	width: 375px;
	height: 600px;
	overflow: hidden;
	border-radius: 3px;
	position: relative;
	border-radius: 4px;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 4px;
	}
`;
 