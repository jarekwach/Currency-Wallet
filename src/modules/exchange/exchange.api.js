class ExchangeAPI {
	apiKey = process.env.REACT_APP_API_KEY;
	apiUrl = 'https://api.apilayer.com/exchangerates_data';

	options = {
		method: 'GET',
		redirect: 'follow',
		headers: { apikey: this.apiKey },
	};

	getRate(currency) {
		return fetch(
			`${this.apiUrl}/latest?symbols=PLN&base=${currency}`,
			this.options
		)
			.then(this.handleErrors)
			.then((resp) => resp.json());
	}

	getHistoricalRate(date, currency) {
		return fetch(
			`${this.apiUrl}/${date}?symbols=PLN&base=${currency}`,
			this.options
		)
			.then(this.handleErrors)
			.then((resp) => resp.json());
	}

	handleErrors = (resp) => {
		if (!resp.ok) {
			throw Error(resp.status);
		}

		return resp;
	};
}

export default ExchangeAPI;
