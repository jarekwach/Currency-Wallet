import types from './exchange.types';

export const saveRatesAction = (rates) => {
	return {
		type: types.SAVE_RATES,
		payload: {
			rates: rates,
		},
	};
};
