import React from 'react'
import styled from 'styled-components'
import { NavLink, Route, useRouteMatch } from 'react-router-dom'
import Charges from './Charges'
import Incomes from './Incomes'


const Links = styled.div`
	display: flex;
`

const AdditionalLink = styled(NavLink)`
	display: inline-block;
	width: 200px;
	text-decoration: none;
	color: '#000000';
	text-align: center;
	padding: 5px;
	:hover {
		color: #26b8ff;
	}
	&.active {
		color: #26b8ff;
	}
`

function Home() {
	const match = useRouteMatch()

	return (
		<>
			<Links>
				<AdditionalLink to={`${match.url}/charges`}>Charges</AdditionalLink>
				<AdditionalLink to={`${match.url}/incomes`}>Incomes</AdditionalLink>
			</Links>

			<Route path={`${match.path}/charges`}>
				<Charges />
			</Route>
			<Route path={`${match.path}/incomes`}>
				<Incomes />
			</Route>
		</>
	)
}

export default Home
