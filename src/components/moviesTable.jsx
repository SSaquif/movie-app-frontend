import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';

class MoviesTable extends Component {
	raiseSort = (sortCriteria, sortOrder) => {
		sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		this.props.onSort(sortCriteria, sortOrder);
	};

	render() {
		//like to do my object destructuring at the very start of every functional component
		//think of stuff i dont have::PaginatedMovie, handleLike and handleDelete in this SFS anymore (is in movies)
		//This should be gotten from props passed from movies now
		//Delete,sort and like handled by parent cuase it has the state which has the movies[] array, that is used for this ops
		const { movies, onDelete, onLike, sortOrder, onSort } = this.props;

		//columnKey are the objectKeys of the movies object (see the console to see what they are)
		//note that genre is nested object hence column key = genre.name
		//this is how lodash's orderBy needs them, which I'm using for sorting
		console.log('moviesTable::props::', this.props);
		//Setting my columns in an Array to be passed as props
		const columns = [
			{ columnHeader: 'Title', columnKey: 'title' },
			{ columnHeader: 'Genre', columnKey: 'genre.name' },
			{ columnHeader: 'Stock', columnKey: 'numberInStock' },
			{ columnHeader: 'Daily Rate', columnKey: 'dailyRentalRate' },
			{ key: 'like' },
			{ key: 'delete' }
		];

		return (
			<React.Fragment>
				<table className="table">
					<TableHeader
						columns={columns}
						sortOrder={sortOrder}
						onSort={onSort}
					/>
					<tbody>
						{/* {paginatedMovies.map((movie) => ( */}
						{movies.map((movie) => (
							<tr key={movie._id}>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<Like
										liked={movie.liked}
										//onClick={() => this.handleLike(movie)} //now gotten via props
										onClick={() => onLike(movie)}
									/>
								</td>
								<td>
									<button
										className="btn btn-danger btn-sm"
										//onClick={() => this.handleDelete(movie)}
										onClick={() => onDelete(movie)}
									>
										{' '}
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

//Converted SFC to CC
//const MoviesTable = (props) => {};

export default MoviesTable;
