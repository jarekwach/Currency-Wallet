import React from 'react';
import { StyledLabel } from './Label.styled';

const Label = ({ name, label }) => {
	return <StyledLabel htmlFor={name}>{label}</StyledLabel>;
};

export default Label;
