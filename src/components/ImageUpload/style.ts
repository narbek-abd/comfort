import styled from "styled-components";

export const Images = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: -12px;

	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 95px;
		height: 95px;
		cursor: pointer;
		svg {
			width: 55px;
			height: 55px;
		}
	}
	input {
		padding: 0;
		width: 0;
		opacity: 0;
		visibility: hidden;
	}
`;

export const Image = styled.div`
	width: 87px;
	height: 65px;
	border-radius: 4px;
	position: relative;
	overflow: hidden;
	margin-right: 12px;
	margin-top: 12px;
	cursor: pointer;

	img {
		width: 87px;
		height: 65px;
		border-radius: 4px;
		object-fit: cover;
	}

	span {
		display: none;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		z-index: 2;
		font-size: 16px;
		color: #fff;
		font-weight: bold;
		margin: 0;
	}

	&:hover {
		&:before {
			content: "";
			position: absolute;
			inset: 0px;
			background: rgba(0, 0, 0, 0.6) none repeat scroll 0% 0%;
			border-radius: 4px;
			z-index: 1;
		}
		span {
			display: flex;
		}
	}
`;
