class LocalStorageAPI {
	save(name, data) {
		try {
			const existingData = localStorage.getItem(name);
			let dataArray = [];

			if (existingData) {
				dataArray = JSON.parse(existingData);
			}

			dataArray.push(data);
			const newData = JSON.stringify(dataArray);
			localStorage.setItem(name, newData);
		} catch (e) {
			console.warn(e);
		}
	}

	load(name) {
		try {
			const existingData = localStorage.getItem(name);
			if (existingData === null) return undefined;
			return JSON.parse(existingData);
		} catch (e) {
			console.warn(e);
			return undefined;
		}
	}
}

export default LocalStorageAPI;
