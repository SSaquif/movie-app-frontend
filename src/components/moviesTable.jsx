import React from 'react';
import Like from './common/like';

const MoviesTable = (props) => {
	//like to do my object destructuring at the very start of every functional component
	//think of stuff i dont have::PaginatedMovie, handleLike and handleDelete in this SFS anymore (is in movies)
	//This should be gotten from props passed from movies now
	const { movies, onDelete, onLike } = props;
	return (
		<React.Fragment>
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>genre</th>
						<th>Stock</th>
						<th>Daily Rate</th>
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
};

export default MoviesTable;
