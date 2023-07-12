import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveToLocalStorage } from '../modules/localStorage/localStorage.actions';
import { getCurrentRate } from '../modules/exchange/exchange.actions';
import ExchangeAPI from '../modules/exchange/exchange.api';
import Form from './Form';
import FormField from './FormField/FormField';
import Button from './Button';
import formFields from '../data/formFields';
import { initialFormData } from '../data/initialFormData';
import formValidation from '../formValidation';

const WalletForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [formErrors, setFormErrors] = useState([]);
	const dispatch = useDispatch();

	const handleInputChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		getHistoricalRateByDate();
	}, [formData.currency, formData.purchaseDate]);

	const getHistoricalRateByDate = () => {
		const { currency, purchaseDate } = formData;
		const api = new ExchangeAPI();

		if (currency && purchaseDate !== '') {
			api.getHistoricalRate(purchaseDate, currency).then((resp) => {
				setFormData({ ...formData, price: resp.rates.PLN.toFixed(2) });
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const errors = formValidation(formData, formFields);
		setFormErrors(errors);

		if (errors.length === 0) {
			dispatch(getCurrentRate(formData));
			saveToLocalStorage('wallet', formData);
			setFormData(initialFormData);
		}
	};

	const renderFieldList = formFields.map((field) => {
		const { name } = field;

		// eslint-disable-next-line array-callback-return
		const fieldError = formErrors.map((error) => {
			if (error.name === field.name) {
				return error.message;
			}
		});

		return (
			<FormField
				key={name}
				fieldData={field}
				value={formData[name]}
				onChange={(value) => handleInputChange(name, value)}
				fieldError={fieldError}
			/>
		);
	});

	return (
		<Form onSubmit={handleSubmit}>
			{renderFieldList}
			<Button type='submit'>save</Button>
		</Form>
	);
};

export default WalletForm;
