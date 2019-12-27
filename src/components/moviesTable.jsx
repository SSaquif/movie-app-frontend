import React, { Component } from 'react';
import Like from './common/like';

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
		const { movies, onDelete, onLike, sortOrder } = this.props;
		//console.log('moviesTable::this.props::', this.props);
		console.log('moviesTable::props::', this.props);
		return (
			<React.Fragment>
				<table className="table">
					<thead>
						<tr>
							{/* the arguments are the objectKeys of the movies object*/}
							{/* note that genre is object so genre name is nested, hence genre.name */}
							{/* this is how lodash's orderBy needs them, which I'm using foe sorting*/}
							{console.log('MovieTable::movies::', movies)}
							<th onClick={() => this.raiseSort('title', sortOrder)}>Title</th>
							<th onClick={() => this.raiseSort('genre.name', sortOrder)}>
								Genre
							</th>
							<th onClick={() => this.raiseSort('numberInStock', sortOrder)}>
								Stock
							</th>
							<th onClick={() => this.raiseSort('dailyRentalRate', sortOrder)}>
								Daily Rate
							</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
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
