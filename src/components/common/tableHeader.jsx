import React, { Component } from 'react';

//Class Interface (will need from props)

//columns:array of objects :: [{coulmnHeader, columnKey},...]
//sortOrder
//onSort function

class TableHeader extends Component {
	raiseSort = (sortCriteria, sortOrder) => {
		sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		this.props.onSort(sortCriteria, sortOrder);
	};

	render() {
		const { columns, sortOrder } = this.props;
		return (
			<thead>
				<tr>
					{columns.map((column) => {
						console.log('tableHeader Component columns::', column);
						return column.columnKey ? (
							<th
								key={column.columnKey}
								onClick={() => this.raiseSort(column.columnKey, sortOrder)}
							>
								{column.columnHeader}
							</th>
						) : (
							<th key={column.key}></th>
						);
					})}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
