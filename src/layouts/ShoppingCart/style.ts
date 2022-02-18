import styled from "styled-components";
import { Button } from '../../globalStyle';
import { Link } from 'react-router-dom';

 export const ShoppingCart = styled.div`
margin-top: 257px;

`; 

export const Inner = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`; 

export const Left = styled.div`
flex-basis: 702px;
${Button} {
	margin-top: ${49 + 15}px;
	margin-left: auto;
	display: block;
}

@media only screen and (max-width:768px) {
	flex-basis: 100%;
}
`; 

export const ProductList = styled.div`


`; 

export const Product = styled.div`
display: flex;
align-items: center;
font-size: 14px;
line-height: 14px;
color: #000000;
position: relative;

&:not(:first-child) {
	margin-top: 30px;
}
&:after {
	content: "";
	position: absolute;
	bottom: -15px;
	width: 100%;
	border: 1px solid #E1E1E4;
}
`; 

export const ProductImg = styled.div`
overflow: hidden;
	position: relative;
	width: 83px;
	height: 87px;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

`; 


export const Inf = styled.div`
margin-left: 17px;
span {
	display: block;
}

`; 

export const Name = styled.div`
margin-top: 4px;
white-space: nowwrap;
`; 

export const Price = styled.div`
margin-top: 4px;
height: 100%;
display: flex;
align-items: center;
justify-content:space-around;
height: 87px;
margin-left: auto;
@media only screen and (max-width:576px) {
	flex-direction: column-reverse;
}
`; 


export const CurrentPrice = styled.div`
margin-left: 90px;
@media only screen and (max-width:768px) {
	display: none;
}

`; 

export const Count = styled.div`
margin-left: 122px;

@media only screen and (max-width:768px) {
margin-left: 70px;
}
@media only screen and (max-width:576px) {
	margin-left: 0;
}
`; 

export const Total = styled.div`
margin-left: 140px;
@media only screen and (max-width:768px) {
margin-left: 70px;
}
@media only screen and (max-width:576px) {
	margin-left: 0;
}
`; 

export const Right = styled.div`
flex-basis: 370px;


`; 

