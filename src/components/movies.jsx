import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/helperMovieDB';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
	state = {
		movies: getMovies(), //this is not the right way to initilize states, for now its ok
		pageSize: 4,
		currentPage: 1
	};

	handleLike = (movie) => {
		console.log(movie.title);
		const updatedMovies = [...this.state.movies]; //copying movies, dont want to chage state directly
		const movieIndex = updatedMovies.indexOf(movie);
		if (!updatedMovies[movieIndex].liked === true) {
			updatedMovies[movieIndex].liked = true;
		} else {
			updatedMovies[movieIndex].liked = false;
		}
		//in future here we must also add functionality to change value in db
		this.setState({
			movies: updatedMovies
		});
	};

	handlePageChange = (page) => {
		console.log(page);
		this.setState({ currentPage: page });
	};

	handlePageChangePrevious = (page) => {
		console.log(page);
		let prevPage = 1;
		if (page !== 1) {
			prevPage = page - 1;
		}
		this.setState({ currentPage: prevPage });
	};

	handlePageChangeNext = (page) => {
		console.log(page);
		let nextPage;
		if (page !== this.state.movies.length) {
			nextPage = page + 1;
		}
		this.setState({ currentPage: nextPage });
	};

	handleDelete = (movie) => {
		//const updatedMovies = deleteMovie(movieID); //dont use this, dont want to delete from db, also givers error
		const updatedMovies = this.state.movies.filter((movieElement) => {
			return movieElement._id !== movie._id;
		});
		this.setState({ movies: updatedMovies });
	};

	render() {
		//TODO:Use object destructuring everywhere to clean up code(currenmtly not)
		//TODO:Will not have to do this.state everytime (seems like convention to use destructuring in REACT)
		const { length: count1 } = this.state.movies; //OBJECT DESTRUCTURING SYNTAX OF ABOVE

		const count = this.state.movies.length;
		const movies = paginate(
			this.state.movies,
			this.state.currentPage,
			this.state.pageSize
		);

		if (count === 0) {
			return (
				<p>
					<b>There are no movies in the database</b>
				</p>
			);
		}
		return (
			<React.Fragment>
				<p>
					<b>Showing {count} movies found in database</b>
				</p>
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
						{movies.map((movie) => (
							<tr key={movie._id}>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<Like
										liked={movie.liked}
										onClick={() => this.handleLike(movie)}
									/>
								</td>
								<td>
									<button
										className="btn btn-danger btn-sm"
										onClick={() => this.handleDelete(movie)}
									>
										{' '}
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{/*Our Pagination component will need to know the following:: */}
				{/*Total Number of Items(ie:the movie count)::which we already have)*/}
				{/*No of items(ie:movies)per page::We should store this in state, cause this can change)*/}
				{/*Finally, Should raise an event when page users clicks on a page button*/}
				<Pagination
					itemCount={count}
					pageSize={this.state.pageSize}
					currentPage={this.state.currentPage}
					onPageChange={this.handlePageChange}
					onPageChangePrev={this.handlePageChangePrevious}
					onPageChangeNext={this.handlePageChangeNext}
				/>
			</React.Fragment>
		);
	}
}

export default Movies;
