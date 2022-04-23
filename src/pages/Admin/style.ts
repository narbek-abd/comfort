import styled from "styled-components";

export const Admin = styled.div``;

export const Right = styled.div`
	margin-top: 15px;
	margin-left: 15px;
	width: calc(100% - 300px);

	@media only screen and (max-width:992px) {
			width: calc(100% - 200px);
	}

	@media only screen and (max-width:576px) {
					width: 100%;
	margin-left: 0;
	}
`;

export const Left = styled.div`
	width: 300px;

	@media only screen and (max-width:992px) {
		width: 200px;
	}
`;

export const Inner = styled.div`
	display: flex;
	margin-top: 40px;

	@media only screen and (max-width:576px) {
		flex-direction: column;
	}
`;
