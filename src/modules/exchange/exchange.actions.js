import types from './exchange.types';
import ExchangeAPI from './exchange.api';
const api = new ExchangeAPI();

export const saveRatesAction = (data) => {
	return {
		type: types.SET_RATE,
		payload: {
			data,
		},
	};
};

export const setHistoricalRateAction = (data) => {
	return {
		type: types.SET_HISTORICAL_RATE,
		payload: {
			data,
		},
	};
};

export const getRate = (currency) => (dispatch) => {
	api.getRate(currency).then((data) => dispatch(saveRatesAction(data)));
};

export const getHistoricalRate = (date, currency) => (dispatch) => {
	api
		.getHistoricalRate(date, currency)
		.then((data) => dispatch(setHistoricalRateAction(data)));
};
