import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import Wallet from './components/Wallet';
import WalletForm from './components/WalletForm';

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);

function App() {
	return (
		<Provider store={store}>
			<WalletForm />
			<Wallet />
		</Provider>
	);
}

export default App;
