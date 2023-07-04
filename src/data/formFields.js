const formFields = [
	{
		name: 'currency',
		label: 'Currency',
		required: true,
		type: 'select',
		placeholder: 'Currency',
		options: ['1', '2', '3'],
	},
	{
		name: 'amount',
		label: 'Amount',
		type: 'number',
		required: true,
		placeholder: 'Amount',
		pattern: null,
	},
	{
		name: 'purchaseDate',
		label: 'Purchase date',
		type: 'date',
		required: true,
		pattern: null,
	},
	{
		name: 'price',
		label: 'Price',
		type: 'number',
		required: true,
		placeholder: 'Price',
		pattern: [null],
	},
];

export default formFields;
