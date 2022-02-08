import styled from "styled-components/macro";
import { SProductCard } from '../../components/ProductCard/style.js';

export const STabsProducts = styled.div`
margin-top: 70px;
 `;

export const SInner = styled.div``;

export const Stabs = styled.div`
margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;


export const SProducts = styled.div`
margin-top: 60px;
display: flex;
flex-wrap: wrap;
${SProductCard } {
 width: 32%;
 @media only screen and (max-width:768px) {
 	width: 48%;
 }

 @media only screen and (max-width:576px) {
 	width: 100%;
 }
}
}

 `;
