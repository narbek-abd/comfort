import styled from "styled-components";
import { Button } from "components/Button/style";
import { Err } from "globalStyle";

export const LoginForm = styled.div`
	color: #9096b2;
	text-align: center;

	a {
		color: #9096b2;
	}
	width: 544px;
	margin: 60px auto 0 auto;

	form {
		margin: 0 auto;
		width: 432px;
		margin-top: 37px;
	}
`;

export const FormHeader = styled.div`
	h3 {
		font-family: "Josefin Sans";
		font-weight: 700;
		font-size: 32px;
		line-height: 32px;
		color: #000000;
	}
	p {
		margin-top: 7px;

		font-size: 17px;
		line-height: 20px;
	}
`;

export const Group = styled.div`
	margin-top: 23px;

	input {
		width: 100%;
		border: 1px solid #c2c5e1;
		box-sizing: border-box;
		border-radius: 2px;
		color: #9096b2;
		padding: 15px 13px;
	}

	${Button} {
		width: 100%;
	}

	${Err} {
		text-align: left;
	}
`;
