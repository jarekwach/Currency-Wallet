export const getCellWithCurrency = (key) => {
	return (
		key === 'price' ||
		key === 'currentValue' ||
		key === 'currentRate' ||
		key === 'profit'
	);
};
