import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	width: ${({ width }) => width || '100px'};
	height: ${({ height }) => height || '40px'};
	background-color: ${({ bColor }) => bColor || 'rgb(90,	141,	238	)'};
	color: ${({ color }) => color || 'white'};
	font-weight: 500;
	padding: ${({ padding }) => padding || '2px'};
	border-radius: ${({ bRadius }) => bRadius || '5px'};
	border: none;
	cursor: pointer;
	margin: ${({ margin }) => margin || 0};
	&:focus {
		background-color: #182bcd;
	}
`

export default function Button(props) {
	return <StyledButton type={props.type} {...props} />
}
