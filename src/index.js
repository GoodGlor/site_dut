import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import persistStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

const { store, persistor } = persistStore()

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<Router>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Router>
	</Provider>,

	document.getElementById('root')
)
