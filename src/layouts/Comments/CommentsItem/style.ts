import styled, { css } from "styled-components";
import { Button } from "../../../components/Button/style";

export const CommentItem = styled.li<{ depth: number }>`
	${(props) =>
		props.depth === 2 &&
		css`
			margin-left: 35px;
		`}
`;

export const Comment = styled.div`
	margin-bottom: 20px;
	display: flex;
	box-shadow: 0px 0px 17.0038px rgba(0, 0, 0, 0.25);
	padding: 15px 13px;
`;

export const Ava = styled.div`
	width: 48px;
	flex-shrink: 0;
	height: 63px;
	position: relative;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const CommentMain = styled.div`
	margin-left: 20px;
`;

export const CommentTop = styled.div`
	display: flex;
	h3 {
		font-family: "Josefin Sans";
		font-style: normal;
		font-weight: 600;
		font-size: 18.1374px;
		line-height: 18px;
		letter-spacing: 0.01em;
		color: #363385;
	}

	p {
		margin-left: 30px;
		font-size: 12.4695px;
		line-height: 15px;
		color: #a3a2b6;
		@media (max-width: 480px) {
			display: none;
		}
	}
`;

export const CommentBody = styled.p`
	font-size: 12.4695px;
	line-height: 28px;

	span {
		color: var(--color-purple);
	}
`;

export const CommentReplies = styled.ul`
	margin-bottom: 20px;
`;

export const Actions = styled.p`
	cursor: pointer;
	display: flex;
	align-items: center;

	span {
		text-decoration: underline;
		text-decoration-style: dotted;
	}

	${Button} {
		margin-left: 15px;
	}
`;
