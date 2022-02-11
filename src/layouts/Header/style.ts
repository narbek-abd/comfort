import styled, { css } from "styled-components";

export const Header = styled.div`
	margin-top: 20px;
`;
export const Inner = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	background-color: #fff;
	@media only screen and (max-width: 768px) {
		justify-content: space-between;
	}
`;


export const Right = styled.div`
	display: flex;
	flex-grow: 1;
	align-items: center;
	@media only screen and (max-width:768px) {
		flex-direction: row-reverse;
	}
`;
