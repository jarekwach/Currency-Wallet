import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './modules/localStorage/localStorage.reducer';
import Wallet from './components/Wallet';
import WalletForm from './components/WalletForm';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
	return (
		<Provider store={store}>
			<WalletForm />
			<Wallet />
		</Provider>
	);
}

export default App;
