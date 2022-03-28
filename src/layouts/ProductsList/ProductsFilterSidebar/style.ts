import styled from "styled-components";

export const FilterSidebar = styled.div`
	flex: 0 0 210px;
`;

export const FilterBlock = styled.div`
	margin-bottom: 30px;
`;

export const FilterTitle = styled.h3`
	font-family: "Josefin Sans";
	font-weight: 700;
	font-size: 20px;
	line-height: 30px;
	color: #292c58;
	text-decoration: underline;
`;

export const FilterContent = styled.div`
	margin-top: 12px;
`;

export const FilterRange = styled.div`
	display: flex;
	justify-content: space-between;

	div {
		span {
			color: #999;
		}
		input {
			margin-top: 6px;
			border: 1px solid #d5d5d5;
			border-radius: 8px;
			padding: 8px 16px;
			width: 100%;
		}
		&:first-child {
			input {
				border-bottom-right-radius: 0;
				border-top-right-radius: 0;
				border-right: none;
			}
		}

		&:last-child {
			input {
				border-bottom-left-radius: 0;
				border-top-left-radius: 0;
			}
		}
	}
`;

export const FilterGroup = styled.div`
	margin-top: 12px;
`;
