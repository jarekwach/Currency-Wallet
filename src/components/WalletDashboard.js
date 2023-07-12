import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRate } from '../modules/exchange/exchange.actions';
import { loadFromLocalStorage } from '../modules/localStorage/localStorage.actions';

import Table from './Table/Table';
import tableColumns from '../data/tableColumns';

const WalletDashboard = () => {
	const { wallet } = useSelector((state) => state.localStorage);
	const { exchange } = useSelector((state) => state.exchange);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadFromLocalStorage('wallet'));
	}, [dispatch]);

	useEffect(() => {
		if (wallet.length > 0) {
			wallet.map((item) => dispatch(getCurrentRate(item)));
		}
	}, [wallet, dispatch]);

	const prepareWalletData = () =>
		exchange.map((item) => {
			const { amount, price, currentRate } = item;

			const currentValue = (amount * currentRate).toFixed(2);
			const profit = (currentValue - amount * price).toFixed(2);

			return { ...item, currentValue, profit };
		});

	return (
		<>
			<Table
				columns={tableColumns}
				data={prepareWalletData().length === 0 ? wallet : prepareWalletData()}
				baseCurrency={'PLN'}
			/>
		</>
	);
};

export default WalletDashboard;
