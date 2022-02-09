import styled from "styled-components";

export const Advantages = styled.section`
	margin-top: 58px;
`;

export const Inner = styled.div`
	margin-top: 116px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Item = styled.div`
	width: 270px;
	text-align: center;
	h3 {
		margin-top: 27px;
		font-family: Josefin Sans;
		font-weight: 600;
		font-size: 22px;
		line-height: 22px;
		color: var(--color-dark-blue);
	}

	p {
		margin-top: 20px;
		font-family: Lato;
		font-weight: bold;
		font-size: 16px;
		line-height: 26px;
		color: rgba(26, 11, 91, 0.3);
	}

	@media only screen and (max-width: 768px) {
		width: 49%;
		&:nth-child(n + 3) {
			margin-top: 50px;
		}
	}

	@media only screen and (max-width: 576px) {
		width: 100%;
		&:not(:first-child) {
			margin-top: 50px;
		}
	}
`;
