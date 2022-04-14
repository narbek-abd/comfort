import styled from "styled-components";
import { Spinner } from "../../components/Spinner/style";

export const Comments = styled.section`
	margin-top: 58px;
`;

export const CommentsList = styled.ul`
	width: 100%;
	margin-top: 90px;
`;

export const LoadMore = styled.div`
	${Spinner} {
		display: block;
		margin: 0 auto;
	}
`;
