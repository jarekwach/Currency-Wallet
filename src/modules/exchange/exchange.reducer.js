import types from './exchange.types';

const initState = {
	exchange: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SET_RATE:
			const { data } = action.payload;
			return {
				...state,
				exchange: [...state.exchange, data],
			};

		default:
			return state;
	}
};

export default reducer;
