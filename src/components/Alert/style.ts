import styled, {css} from "styled-components";

export const Alert = styled.div<{variant: string}>`
${props => {
	return props.variant === 'error' && css`
	background-color: red;
	 `
}}

${props => {
	return props.variant === 'success' && css`
	background-color: green;
	 `
}}

${props => {
	return props.variant === 'warning' && css`
	background-color: orange;
	 `
}}
`

export const Inner = styled.div`
padding: 10px 10px 10px 20px;
color: #fff;

`
 