import styled from "styled-components";
import { Button } from "../../../../globalStyle";

export const Actions = styled.div`
	display: flex;
	align-items: center;
	${Button} {
		margin-right: 10px;
		a {
			color: #fff;
		}
	}
`;
