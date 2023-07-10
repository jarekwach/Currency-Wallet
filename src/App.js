import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import Wallet from './components/Wallet';
import WalletForm from './components/WalletForm';
import AppContainer from './components/AppContainer';

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
			<AppContainer>
				<WalletForm />
				<Wallet />
			</AppContainer>
		</Provider>
	);
}

export default App;
