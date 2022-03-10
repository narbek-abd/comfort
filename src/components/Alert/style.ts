import styled, {css} from "styled-components";

export const Alert = styled.div<{variant: string}>`
border-radius: 3px;

${props => {
	return props.variant === 'error' && css`
	background-color: #dc3545;
	 `
}}

${props => {
	return props.variant === 'success' && css`
	background-color: #25bc32;
	 `
}}

${props => {
	return props.variant === 'warning' && css`
	background-color: #ffc107;
	 `
}}
`

export const Inner = styled.div`
padding: 10px 10px 10px 20px;
color: #fff;
`
 