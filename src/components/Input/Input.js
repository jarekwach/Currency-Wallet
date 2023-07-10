import React from 'react';
import { StyledInput } from './Input.styled';

const Input = (props) => {
	const { type = 'text', placeholder, name, onChange, value, maxDate = null } = props;

	return (
		<StyledInput
			name={name}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
			max={maxDate}></StyledInput>
	);
};

export default Input;
