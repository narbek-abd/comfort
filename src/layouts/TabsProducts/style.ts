import styled from "styled-components";
import { ProductCard } from "../../components/ProductCard/style";

export const TabsProducts = styled.div`
    margin-top: 70px;
`;

export const Inner = styled.div``;

export const tabs = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Products = styled.div`
margin-top: 60px;
display: flex;
flex-wrap: wrap;
${ProductCard} {
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
