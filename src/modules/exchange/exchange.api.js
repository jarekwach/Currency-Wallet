class ExchangeAPI {
	apiKey = process.env.REACT_APP_API_KEY;
	apiUrl = 'http://api.exchangeratesapi.io/v1';

	getRates() {
		return fetch(`${this.apiUrl}/latest?access_key=${this.apiKey}`)
			.then(this.handleErrors)
			.then((resp) => resp.json());
	}

	getHistoricalRate(date, currency) {
		return fetch(
			`${this.apiUrl}/${date}?access_key=${this.apiKey}&symbols=${currency}`
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
