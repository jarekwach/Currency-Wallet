import React from 'react';
import { StyledFormField } from './FormField.styled';
import Label from '../Label';
import Input from '../Input';
import FormError from '../FormError';

const FormField = ({ fieldData, value, onChange, fieldError }) => {
	const { name, placeholder, type, options, maxDate } = fieldData;

	return (
		<StyledFormField>
			<Label name={name} />
			{type === 'select' ? (
				<select
					style={defaultStyleSelect}
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
					maxDate={maxDate}
				/>
			)}
			<FormError>{fieldError}</FormError>
		</StyledFormField>
	);
};

const defaultStyleSelect = {
	width: '100%',
	padding: '0.8rem 1.2rem',
	fontSize: '1.4rem',
	borderRadius: '10px',
	border: '0.5px solid #333',
	outline: 'none',
	textAlign: 'center',
};

export default FormField;
