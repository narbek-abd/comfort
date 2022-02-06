import styled from "styled-components/macro";

export const SSearchBar = styled.form`
	// margin-left: auto;
	display: flex;

	input {
		width: 265px;
		@media only screen and (max-width:992px) {
			width: 200px;
		}
		@media only screen and (max-width:480px) {
			width: calc(100% - 51px);
		}
	}

	@media only screen and (max-width:768px) {
		margin-left: 10px;
		margin-right: 10px;
	}
`;

export const SSearchButton = styled.button`
	width: 51px;
	height: 40px;
	background-color: var(--color-pink);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	svg {
		color: #fff;
		width: 20px;
		height: 20px;
	}
`;
