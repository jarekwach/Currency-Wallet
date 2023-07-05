import types from './exchange.types';

const initState = {
	rates: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SAVE_RATES:
			const { rates } = action.payload;

			return {
				...state,
				rates: rates,
			};

		default:
			return state;
	}
};

export default reducer;
