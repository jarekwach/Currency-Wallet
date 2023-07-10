import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({type, onClick, children}) => {
	return (
		<StyledButton
			type={type}
			onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default Button;
