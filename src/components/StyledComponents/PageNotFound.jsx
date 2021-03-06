import React from 'react'
import Flex from './Flex'
import TextContent from './TextContent'

export default function PageNotFound() {
	return (
		<Flex margin="auto" justify="center" align="center">
			<TextContent textAlign="center" margin="20% auto" fSize="4em" color="black">
				😞 Page not found 😞
			</TextContent>
		</Flex>
	)
}
