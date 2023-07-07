import types from './exchange.types';

// przykładowa odpowiedz z API
import exampleRates from '../../data/exampleRatesFromAPI';

const initState = {
	rates: exampleRates,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SAVE_RATES:
			const { rates } = action.payload.data;

			return {
				...state,
				rates: rates,
			};

		default:
			return state;
	}
};

export default reducer;
