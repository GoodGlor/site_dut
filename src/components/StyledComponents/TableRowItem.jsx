import React from 'react'
import styled from 'styled-components'

const Item = styled.span`
	margin: ${({ margin }) => margin || 0};
`

export default function TableRowItem(props) {
	return <Item {...props} />
}
