import types from './exchange.types';
import ExchangeAPI from './exchange.api';
const api = new ExchangeAPI();

export const saveRatesAction = (data) => {
	return {
		type: types.SAVE_RATES,
		payload: {
			data,
		},
	};
};

export const getRates = () => (dispatch) => {
	api.getRates().then((resp) => dispatch(saveRatesAction(resp)));
};
