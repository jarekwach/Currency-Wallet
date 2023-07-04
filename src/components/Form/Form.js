import React from 'react';
import { StyledForm } from './Form.styled';

const Form = ({ children, onSubmit }) => {
	return (
		<StyledForm
			onSubmit={onSubmit}
			noValidate>
			{children}
		</StyledForm>
	);
};

export default Form;
