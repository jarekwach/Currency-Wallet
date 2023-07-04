import React from 'react';
import { StyledFormError } from './FormError.styled';

const FormError = ({ children }) => {
	return <StyledFormError>{children}</StyledFormError>;
};

export default FormError;
