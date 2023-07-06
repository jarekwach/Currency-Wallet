import React, { useState, useEffect } from 'react';
import Form from './Form';
import FormField from './FormField/FormField';
import formFields from '../data/formFields';
import formValidation from '../formValidation';
import { initialFormData } from '../data/initialFormData';
import { useDispatch } from 'react-redux';
import {
	loadFromLocalStorage,
	saveToLocalStorage,
} from '../modules/localStorage/localStorage.actions';

const WalletForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [formErrors, setFormErrors] = useState([]);
	const dispatch = useDispatch();

	const handleInputChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		dispatch(loadFromLocalStorage('wallet'));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const errors = formValidation(formData, formFields);
		setFormErrors(errors);

		if (errors.length === 0) {
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
			<button type='submit'>save</button>
		</Form>
	);
};

export default WalletForm;