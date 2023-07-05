import types from './localStorage.types';

const initState = {
	wallet: [],
};

// eslint-disable-next-line default-param-last
const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SAVE_DATA: {
			const { data } = action.payload;

			return {
				...state,
				wallet: data,
			};
		}

		default:
			return state;
	}
};

export default reducer;
