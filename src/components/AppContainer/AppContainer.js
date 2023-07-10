import React from 'react';
import { StyledAppContainer } from './AppContainer.styled';

const AppContainer = ({ children }) => {
	return <StyledAppContainer>{children}</StyledAppContainer>;
};

export default AppContainer;
