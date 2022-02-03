import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
  padding: 0;
}

*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; 
}

html{
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  overflow-x: hidden;
  position: relative;
  font-family: "OpenSansCondensed-Bold";
}

a {
  text-decoration: none;
  outline: none;
}

ul li {
  list-style-type: none;
}

img {
  max-width: 100%;
  height: auto;
}

button{
  cursor: pointer;
}

input,
textarea,
button {
  outline: none; 
  width: 100%;
}

textarea{
  resize:none;
}

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #fff;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #fff;
}

input:-moz-placeholder, textarea:-moz-placeholder {
  color: #fff;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #fff;
}

`;

export default GlobalStyle;



export const SContainer = styled.div`
max-width: 1120px + 30px;
margin: 0 auto;
padding: 0 15px;
position: relative;
@media only screen and (max-width: 1200px) {
  max-width: 960px + 30px;
}
@media only screen and (max-width: 992px) {
  max-width: 720px + 30px;
}
@media only screen and (max-width: 768px) {
  max-width: 540px + 30px;
}
@media only screen and (max-width: 576px) {
  max-width: auto;
}
`;


export const SBtn = styled.a`
padding: 17px 47px;
background-color: #ff9700;
color: #fff;
display: inline-block;
text-align: center;
text-transform: uppercase;
`;