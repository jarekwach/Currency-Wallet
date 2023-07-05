import { combineReducers } from 'redux';
import localStorageReducer from '../modules/localStorage/localStorage.reducer';
import exchangeReducer from '../modules/exchange/exchange.reducer';

const reducers = combineReducers({
	localStorage: localStorageReducer,
	exchange: exchangeReducer,
});

export default reducers;
