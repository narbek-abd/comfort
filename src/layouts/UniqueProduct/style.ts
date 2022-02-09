import styled from "styled-components";
import { Button, SectionTitle } from "../../globalStyle";

export const UniqueProduct = styled.div`
	margin-top: 150px;
`;

export const Inner = styled.div`
	display: flex;

	${SectionTitle} {
		text-align: left;
	}
`;

export const Left = styled.div`
	flex: 0 0 544px;

	@media only screen and (max-width: 992px) {
		flex: 0 0 400px;
	}

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;
export const Right = styled.div`
	margin-top: 82px;
	ul {
		margin-top: 30px;
		li {
			margin-top: 13px;
			font-family: Lato;
			font-weight: 500;
			font-size: 16px;
			line-height: 132%;
			letter-spacing: 0.015em;
			color: #acabc3;
			position: relative;
			padding-left: 20px;

			&:before {
				content: ".";
				font-size: 63px;
				font-weight: bold;
				display: inline-block;
				position: absolute;
				left: -4px;
				right: 15px;
				top: -19px;
			}

			&:first-child {
				&:before {
					color: #f52b70;
				}
			}

			&:nth-child(2) {
				&:before {
					color: #2b2bf5;
				}
			}

			&:last-child {
				&:before {
					color: #2bf5cc;
				}
			}
		}
	}

	${Button} {
		margin-top: 38px;
	}
`;
