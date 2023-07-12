import types from './localStorage.types';
import LocalStorageAPI from './localStorage.api';
const api = new LocalStorageAPI();

export const saveDataAction = (data) => {
	return {
		type: types.SAVE_DATA,
		payload: {
			data,
		},
	};
};

export const saveToLocalStorage = (name, data) => {
	api.save(name, data);
};

export const loadFromLocalStorage = (name) => (dispatch) => {
	const localStorageData = api.load(name);

	if (localStorageData !== undefined) {
		dispatch(saveDataAction(localStorageData));
	}

	return null
};
