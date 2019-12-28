import React, { Component } from 'react';
import lodash from 'lodash';

class TableBody extends Component {
	renderCell = (row, column) => {
		if (column.content) {
			console.log('content::', column.content);
			return column.content(row); //Will return a react element //column.content is afumctionm
		}
		if (column.columnKey) {
			//return <td>{row[column.columnKey]}</td>; //col.colKey wont work with nested items, so use lodash instead
			return lodash.get(row, column.columnKey);
		}
	};
	render() {
		const { rows, columns } = this.props;
		console.log('TableBody::this.props.rows', rows);
		console.log('TableBody::this.props.columns', columns);
		return (
			<React.Fragment>
				<tbody>
					{rows.map((row) => {
						console.log('TableBody::row', row);
						return (
							<tr key={row._id}>
								{columns.map((column) => {
									console.log('TableBody::column', column);
									return (
										<td key={column.columnKey || column.key}>
											{this.renderCell(row, column)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</React.Fragment>
		);
	}
}

export default TableBody;
