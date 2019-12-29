import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = (props) => {
	const { columns, sortOrder, onSort, rows } = props;
	return (
		<React.Fragment>
			<table className="table">
				<TableHeader columns={columns} sortOrder={sortOrder} onSort={onSort} />
				<TableBody rows={rows} columns={columns} />
			</table>
		</React.Fragment>
	);
};

export default Table;
