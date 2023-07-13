import React from 'react';
import { StyledTable } from './Table.styled';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow/TableRow';
import TableCell from '../TableCell';
import { getCellWithCurrency } from '../../helpers/helpers';

const Table = ({ columns, data, baseCurrency }) => {
	const renderColumns = columns.map((column) => (
		<TableHeader key={column.name}>{column.label}</TableHeader>
	));

	const renderRows = data.map((row, i) => (
		<TableRow key={i}>
			{Object.entries(row).map(([key, value]) => {
				if (getCellWithCurrency(key)) {
					return (
						<TableCell key={key}>
							{value} {baseCurrency}
						</TableCell>
					);
				}
				return <TableCell key={key}>{value}</TableCell>;
			})}
		</TableRow>
	));

	return (
		<StyledTable>
			<thead>
				<tr>{renderColumns}</tr>
			</thead>
			<tbody>{renderRows}</tbody>
		</StyledTable>
	);
};

export default Table;
