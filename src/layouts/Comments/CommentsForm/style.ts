import styled, { css } from "styled-components";

export const CommentsForm = styled.form<{ size: string }>`
	margin-top: 20px;

	${(props) =>
		props.size === "small" &&
		css`
			margin-top: 15px;
			margin-left: 30px;

			${Group} {
				margin-bottom: 15px;
				margin-right: 10px;

				input,
				textarea {
					width: 100%;
					padding: 10px 15px;
					border: 1.12382px solid #8a8fb9;
				}
				textarea {
					height: 90px;
				}
				width: 250px;
			}
		`}
`;

export const Group = styled.div`
	margin-bottom: 15px;
	input,
	textarea {
		width: 100%;
		padding: 10px 15px;
		border: 1.12382px solid #8a8fb9;
	}

	textarea {
		width: 730px;
		height: 150px;
	}
`;

export const Horizontal = styled.div`
	display: flex;
	justify-content: flex-start;
	${Group} {
		margin-right: 30px;
		width: 350px;
	}
`;
