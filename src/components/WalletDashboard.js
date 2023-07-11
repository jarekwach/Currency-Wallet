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
	}, []);

	useEffect(() => {
		if (wallet.length > 0) {
			wallet.map((item) => dispatch(getCurrentRate(item.currency, item)));
		}
	}, [wallet.length]);

	const walletData = () =>
		exchange.map((item) => {
			const { amount, price, currentRate } = item;

			const currentValue = (amount * currentRate).toFixed(2);
			const profit = (amount * price - currentValue).toFixed(2);

			return { ...item, currentValue, profit };
		});

	return (
		<>
			<Table
				columns={tableColumns}
				data={walletData().length === 0 ? wallet : walletData()}
			/>
		</>
	);
};

export default WalletDashboard;
