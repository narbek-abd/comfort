import styled from "styled-components";

export const MenuItem = styled.li`
cursor: pointer;
padding: 10px 0;
display: flex;
justify-content: space-between;
align-items: center;

&:hover {
	background-color: #33333330;
}

span, a {
	color: #000;
	font-size: 14px;
}

svg {
	margin-right: 10px;
	transform: rotate(-90deg);
}
`


 