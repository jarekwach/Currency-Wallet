import React, { useState, useEffect } from 'react';
import Form from './Form';
import Button from './Button';
import FormField from './FormField/FormField';
import formFields from '../data/formFields';
import formValidation from '../formValidation';
import { initialFormData } from '../data/initialFormData';
import { useDispatch, useSelector } from 'react-redux';
import {
	saveDataAction,
	saveToLocalStorage,
} from '../modules/localStorage/localStorage.actions';
import ExchangeAPI from '../modules/exchange/exchange.api';

const WalletForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [formErrors, setFormErrors] = useState([]);
	const { wallet } = useSelector((state) => state.localStorage);
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
			saveToLocalStorage('wallet', formData);
			dispatch(saveDataAction([...wallet, formData]));
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
