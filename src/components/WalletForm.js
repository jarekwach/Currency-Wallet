import React, { useState } from 'react';
import Form from './Form';
import FormField from './FormField/FormField';
import formFields from '../data/formFields';
import formValidation from '../formValidation';
import { initialFormData } from '../data/initialFormData';

const WalletForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [formErrors, setFormErrors] = useState([]);

	const handleInputChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		const errors = formValidation(formData, formFields);
		setFormErrors(errors);
	};

	const renderFieldList = formFields.map((field) => {
		const { name } = field;

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
