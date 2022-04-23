import styled from "styled-components";

export const MainSlider = styled.section`
margin-top: 20px;

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet
{
	width: 10px;
height: 9.89px;
background: var(--color-pink);
transform: rotate(-45deg);
border-radius: 0;
margin: 5.5px 5.5px;
}
`; 

export const SlideLink = styled.a<{bg: string}>`
display: block;
	background: url(${props => props.bg}) no-repeat center center;
	background-size: cover;
	height: 764px;
`; 



export const MiniTitle = styled.div`
padding-top: 203px;
font-family: Lato;
font-weight: bold;
font-size: 16px;
line-height: 28px;
color: var(--color-pink);

@media only screen and (max-width:768px) {
padding-top: 50px;
}
`; 
export const Title = styled.div`
font-family: Josefin Sans;
font-weight: bold;
font-size: 53px;
line-height: 70px;
letter-spacing: 0.015em;
color: #000000;
max-width: 654px;
margin-top: 12px;
@media only screen and (max-width:576px) {
font-size: 43px;
line-height: 50px;
}
`; 
export const SubTitle = styled.div`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 28px;
color: #8A8FB9;
max-width: 560px;
margin-top: 31px;
`; 

