import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';
import WalletDashboard from './components/WalletDashboard';
import WalletForm from './components/WalletForm';
import AppContainer from './components/AppContainer';
import Header from './components/Header';

import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);

function App() {
	return (
		<Provider store={store}>
			<ResetStyle />
			<GlobalStyle />
			<Header />
			<AppContainer>
				<WalletForm />
				<WalletDashboard />
			</AppContainer>
		</Provider>
	);
}

export default App;
