import React from 'react';
import { StyledHeader } from './Header.styled';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
	return (
		<StyledHeader>
			<FontAwesomeIcon icon={faWallet} />
			<h1>Currency Wallet</h1>
		</StyledHeader>
	);
};

export default Header;
