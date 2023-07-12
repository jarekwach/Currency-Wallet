import currencies from './currencies';
const currenciesArr = Object.keys(currencies);
const today = new Date().toISOString().slice(0, 10);

const formFields = [
	{
		name: 'currency',
		label: 'Currency',
		required: true,
		type: 'select',
		placeholder: 'Currency',
		options: currenciesArr,
	},
	{
		name: 'amount',
		label: 'Amount',
		type: 'number',
		required: true,
		placeholder: 'amount',
		pattern: null,
	},
	{
		name: 'purchaseDate',
		label: 'Purchase date',
		type: 'date',
		required: true,
		pattern: null,
		maxDate: today,
	},
	{
		name: 'price',
		label: 'Price',
		type: 'number',
		required: true,
		placeholder: 'price',
		pattern: null,
	},
];

export default formFields;
