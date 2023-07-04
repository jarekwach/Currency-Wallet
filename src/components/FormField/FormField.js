import React from 'react';
import { StyledFormField } from './FormField.styled';
import Label from '../Label';
import Input from '../Input';
import FormError from '../FormError';

const FormField = ({ fieldData, value, onChange, fieldError }) => {
	const { name, placeholder, type, options } = fieldData;

	return (
		<StyledFormField>
			<Label name={name} />
			{type === 'select' ? (
				<select
					name={name}
					value={value}
					onChange={(e) => onChange(e.target.value)}>
					<option value=''>Select an option</option>
					{options.map((option) => (
						<option
							key={option}
							value={option}>
							{option}
						</option>
					))}
				</select>
			) : (
				<Input
					type={type}
					name={name}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					value={value}
				/>
			)}
			<FormError>{fieldError}</FormError>
		</StyledFormField>
	);
};

export default FormField;
