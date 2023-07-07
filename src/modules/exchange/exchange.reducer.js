import types from './exchange.types';

const initState = {
	rates: [{ PLN: 4.41 }, { PLN: 3.87 }],
	historicalRate: { PLN: '' },
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SET_RATE:
			const { rates } = action.payload.data;

			return {
				...state,
				rates: [...state.rates, rates],
			};

		case types.SET_HISTORICAL_RATE:
			const { data } = action.payload;

			return {
				...state,
				historicalRate: data.rates,
			};

		default:
			return state;
	}
};

export default reducer;
