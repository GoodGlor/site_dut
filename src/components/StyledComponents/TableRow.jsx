import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 50px;
	border-top: ${({ border }) => (border ? '1px solid #cacaca' : 'none')};
	border-bottom: ${({ border }) => (border ? '1px solid #cacaca' : 'none')};
	margin: ${({margin}) => margin || '0'};
	padding: 10px 20px;
`

export default function TableRow(props) {
	return <Row {...props} />
}
