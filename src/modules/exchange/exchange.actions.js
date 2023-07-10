import types from './exchange.types';
import ExchangeAPI from './exchange.api';
const api = new ExchangeAPI();

export const setRateAction = (data) => {
	return {
		type: types.SET_RATE,
		payload: {
			data,
		},
	};
};

export const getCurrentRate = (currency, data) => (dispatch) => {
	api.getRate(currency).then((resp) => {
		dispatch(
			setRateAction({ ...data, currentRate: resp.rates.PLN.toFixed(2) })
		);
	});
};
