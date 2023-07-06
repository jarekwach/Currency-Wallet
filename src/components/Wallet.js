import React from 'react';
import { useDispatch } from 'react-redux';
import { getRates } from '../modules/exchange/exchange.actions';

const Wallet = () => {
	const dispatch = useDispatch()

	return <button onClick={() => dispatch(getRates())}>getRatesAction</button>;
};

export default Wallet;
