import React from 'react';
import { StyledInput } from './Input.styled';

const Input = (props) => {
	const { type = 'text', placeholder, name, onChange, value } = props;

	return (
		<StyledInput
			name={name}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			value={value}></StyledInput>
	);
};

export default Input;
