import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRates } from '../modules/exchange/exchange.actions';

import Table from './Table/Table';
import tableColumns from '../data/tableColumns';

const Wallet = () => {
	const { wallet } = useSelector((state) => state.localStorage);
	const dispatch = useDispatch();

	const prepareWalletData = () =>
		wallet.map((item) => {
			const currentRate = 'currentRate';
			const currentValue = 'currentValue';
			const profit = 'profit';

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
