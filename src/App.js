import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import logo from './mywallet.png'
import Home from './components/Home/Home'
import Chart from './components/Charts/charts'
import CategoriesPage from './components/Categories/CategoriesPage'
import PageNotFound from './components/StyledComponents/PageNotFound'
import { useSelector } from 'react-redux';


const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
`

const Navigator = styled.div`
	width: 8%;
	height: 100vh;
	background: #efefef;
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const MainLink = styled(NavLink)`
	text-decoration: none;
	color: #5f5f5f;
	margin: 5px;
	:hover {
		color: #26b8ff;
	}
	&.active {
		color: #26b8ff;
	}
`

const Logo = styled.img`
	width: 100%;
	height: auto;
`

const Content = styled.div`
	width: 100%;
`

const Balance = styled.div`
	height: 160px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
`

const BalanceHeader = styled.h3`
	margin: 10px 20px;
	color: #5f5f5f;
`
const MoneyHeader = styled.h2`
	margin: 0 20px;
`

export default function App() {
	const chargesDB =  useSelector(state =>  state.homeReducer.chargesDB);
	const incomesDB = useSelector(state => state.homeReducer.incomesDB);

	const countBalance = () => {
		const inc = incomesDB.reduce((acc, cur) => {
			let bal = acc + parseFloat(cur.money)
			return +bal.toFixed(2)
		}, 0)
		const char = chargesDB.reduce((acc, cur) => {
			let bal = acc + parseFloat(cur.money)
			return +bal.toFixed(2)
		}, 0)
		return inc - char
	}

	return (
		<Wrapper>
			<Navigator>
				<Logo src={logo} alt="logo" />
				<MainLink to="/cursor-project">Home</MainLink>
				<MainLink exact to="/categories">
					Categories
				</MainLink>
				<MainLink to="/charts">Charts</MainLink>
			</Navigator>
			<Content>
				<Balance>
					<BalanceHeader>Balance</BalanceHeader>
					<MoneyHeader>$ {countBalance()} </MoneyHeader>
				</Balance>
				<Switch>
					<Route path="/cursor-project">
						<Home />
						<Redirect to="/cursor-project/charges" />
					</Route>
					<Route exact path="/categories" component={CategoriesPage} />
					<Route path="/charts" component={Chart} />
					<Route exact path="*" component={PageNotFound} />
				</Switch>
			</Content>
		</Wrapper>
	)
}
