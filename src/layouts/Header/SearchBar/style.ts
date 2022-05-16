import styled from "styled-components";

export const SearchBar = styled.div`
	margin-left: auto;
	position: relative;

	@media (max-width: 768px) {
		margin-left: 10px;
		margin-right: 10px;
	}
`;

export const SearchBarForm = styled.form`
	display: flex;

	input {
		border: 1px solid var(--color-dark-blue);
		padding: 0 15px;
		width: 265px;
		@media (max-width: 992px) {
			width: 200px;
		}
		@media (max-width: 480px) {
			width: calc(100% - 51px);
		}
	}
`;

export const SearchButton = styled.button`
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

export const Products = styled.div`
	position: absolute;
	top: 40px;
	width: 100%;
	background-color: #fff;
	z-index: 999;
`;

export const Product = styled.div`
	padding: 9px 9px 9px 15px;

	a {
		display: flex;
		align-items: center;
		color: var(--color-dark-blue);

		@media (max-width:480px) {
		font-size: 13px;
	}
	}

	span {
		margin-left: 9px;
	}
`;

export const ProductImg = styled.img`
	width: 25px;
	height: 25px;

	@media (max-width:480px) {
		display: none;
	}
`;
