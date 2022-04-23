import styled from "styled-components";

export const Dashboard = styled.div``;

export const Totals = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Total = styled.div`
	width: 32%;
	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	border-radius: 10px;
	border: 1px solid rgb(224, 224, 227);
`;

export const TotalInner = styled.div`
	display: flex;
	padding: 16px;
	justify-content: space-between;
`;

export const TotalIcon = styled.div``;

export const TotalInf = styled.div`
	text-align: end;
`;

export const TotalInfName = styled.div`
	font-size: 1rem;
	color: rgba(0, 0, 0, 0.6);
`;

export const TotalInfValue = styled.div`
	font-size: 1.5rem;
	margin-top: 5px;
`;
