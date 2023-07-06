import React from 'react';
import { StyledTable } from './Table.styled';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow/TableRow';
import TableCell from '../TableCell';

const Table = ({ columns, data }) => {
	const renderColumns = columns.map((column) => (
		<TableHeader key={column.name}>{column.label}</TableHeader>
	));

	const renderRows = data.map((row, i) => (
		<TableRow key={i}>
			{Object.entries(row).map(([key, value]) => (
				<TableCell key={key}>{value}</TableCell>
			))}
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
