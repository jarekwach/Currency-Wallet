import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRates } from '../modules/exchange/exchange.actions';

import Table from './Table/Table';
import tableColumns from '../data/tableColumns';

const Wallet = () => {
	const { wallet } = useSelector((state) => state.localStorage);
	const { rates } = useSelector((state) => state.exchange);
	const dispatch = useDispatch();

	const getCurrentRate = (currency) => {
		return rates[currency].toFixed(2);
	};

	const getCurrentValue = (amount, currentRate) => {
		return (amount * currentRate).toFixed(2);
	};

	const getProfit = (amount, price, currentValue) => {
		return amount * price - currentValue;
	};

	const prepareWalletData = () =>
		wallet.map((item) => {
			const { currency, amount, purchaseDate, price } = item;

			const currentRate = getCurrentRate(currency);
			const currentValue = getCurrentValue(amount, currentRate);
			const profit = getProfit(amount, price, currentValue);

			return { ...item, currentRate, currentValue, profit };
		});

	return (
		<>
			<Table
				columns={tableColumns}
				data={prepareWalletData()}
			/>
			<button onClick={() => dispatch(getRates())}>getRatesAction</button>
		</>
	);
};

export default Wallet;
