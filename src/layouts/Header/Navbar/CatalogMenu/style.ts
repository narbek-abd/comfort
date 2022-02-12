import styled from "styled-components";

export const CatalogMenu = styled.li`
display: inline-block;
position: relative;

`




export const CatalogMenuChildren = styled.div`
`;


export const Inner = styled.div`
position: absolute;
display: flex;
width: 1175px;
left: -184px;
z-index: 99;
`;

export const CatalogMenuList = styled.ul`
width: 195px;
background-color: red;
`


export const Toggler = styled.div`
	display: block;
	height: 50px;
	cursor: pointer;
	line-height: 50px;
	margin: 0 15px;
	color: #0D0E43;
	text-decoration: none;
	outline: 0;
	transition: all 0.5s linear;
	white-space: nowrap;
	transition: var(--color-tr);

	&:hover{
	color: var(--color-pink);
	}
`


 