import styled, { css } from "styled-components";

export const Overlay = styled.div<{ isVisible: boolean; fullscreen?: boolean }>`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s ease-in-out;
	text-align: center;
	overflow: hidden;
	z-index: 999;
	margin-right: -4px;

	&:before {
		content: "";
		display: inline-block;
		width: 0;
		height: 100%;
		vertical-align: middle;
	}

	${(props) =>
		props.isVisible &&
		css`
			overflow-x: hidden;
			overflow-y: auto;
			opacity: 1;
			visibility: visible;
			transition: all 0.3s ease-in-out;

			${Modal} {
				position: relative;
				vertical-align: middle;
				display: inline-block;
			}
		`}

	${(props) =>
		props.fullscreen &&
		css`
			${Modal} {
				margin: 0;
				width: 100%;
				height: 100%;
			}
		`}
`;

export const Modal = styled.div`
	margin: 15px 0;
	background-color: #fff;
	width: 300px;
	height: 300px;
	display: none;
`;
