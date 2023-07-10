import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getHistoricalRate,
	getRate,
} from '../modules/exchange/exchange.actions';
import { loadFromLocalStorage } from '../modules/localStorage/localStorage.actions';

import Table from './Table/Table';
import tableColumns from '../data/tableColumns';

const Wallet = () => {
	const { wallet } = useSelector((state) => state.localStorage);
	const { rates } = useSelector((state) => state.exchange);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadFromLocalStorage('wallet'));
	}, []);

	// do pobierania aktualnych stawek, zapisuje w state rates = [{}, {}]
	// useEffect(() => {
	// 		if (wallet.length > 0) {
	// 			wallet.map((item) => dispatch(getRate(item.currency)));
	// 		}
	// }, [wallet]);

	const getCurrentValue = (amount, currentRate) => {
		return (amount * currentRate).toFixed(2);
	};

	const getProfit = (amount, price, currentValue) => {
		return (amount * price - currentValue).toFixed(2);
	};

	const prepareWalletData = () =>
		wallet.map((item, i) => {
			const { currency, amount, purchaseDate, price } = item;

			const currentRate = rates[i].PLN;
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
			<button onClick={() => dispatch(getRate('EUR'))}>
				getRateAction 'EUR'
			</button>
			<button onClick={() => dispatch(getHistoricalRate('2023-05-05', 'EUR'))}>
				getHistoricalRate
			</button>
		</>
	);
};

export default Wallet;
