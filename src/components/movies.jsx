import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/helperMovieDB';
import { getGenres } from '../services/helperGenreDB';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import { paginate } from '../utils/paginate';
import lodash from 'lodash';

class Movies extends Component {
	state = {
		//moies and genres will be received from backend later
		//Right place to inititalise them is componentDidMount() method/LCH
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
		selectedGenre: '',
		sortCriteria: 'title', //initial sorting criteria
		sortOrder: 'asc' //initial sorting order
	};

	//This method is called when an instance of the component is rendered in the DOM
	componentDidMount() {
		//get genre returns an array of objects with 2 properties, id and name
		const genres = [{ _id: 'all', name: 'All Genres' }, ...getGenres()];
		//this.setState({ movies: getMovies(), genres: genres });
		this.setState({ movies: getMovies(), genres }); //equivalent to the above
	}

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

	handleSort = (sortCriteria, sortOrder) => {
		//This method should just update the state of variables that defines sorting in render
		//The main logic moved to child componenets raiseSort, which determines the 2 variables
		//and passes it here
		this.setState({ sortCriteria, sortOrder }); //same as above
	};

	handleGenreSelect = (genre) => {
		console.log(genre);
		//Remeber when state changes, The component and all its children are re rendered
		//upon clicking (in child component listGroup) selected genre will be the one clicked
		//remember to setcurrentpage back to 1 when we select a new genre
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	render() {
		//No longer need count using filteredMovies' length instead
		//TODO:Use object destructuring everywhere to clean up code(currenmtly not)
		//TODO:Will not have to do this.state everytime (seems like convention to use destructuring in REACT)
		//const count = this.state.movies.length;
		//const { length: count1 } = this.state.movies; //OBJECT DESTRUCTURING SYNTAX OF ABOVE
		console.log('ClassComponent::this.props', this.props);
		//STEP BASIC:: Destructure state for cleaner code
		const {
			selectedGenre,
			currentPage,
			pageSize,
			sortCriteria,
			sortOrder,
			movies: allMovies //renaming movies to allMovies
		} = this.state;

		//Step 1:: FILTER the movies to be shown
		//remember empty string is falsy
		const filteredMovies =
			selectedGenre && selectedGenre.name !== 'All Genres'
				? allMovies.filter((movie) => {
						console.log('Selected Gen', selectedGenre.name);
						return movie.genre.name === selectedGenre.name;
				  })
				: allMovies;

		console.log('filteredMovies::', filteredMovies);

		//STEP 2::SORT Movies by correct criteria nad order
		//see lodash orderBy doc
		//params [moviesArray, sortCriteriaArray(correspond to moviesArray keys) , sortOrderArray]
		const sortedMovies = lodash.orderBy(
			filteredMovies,
			[sortCriteria],
			[sortOrder]
		);

		//STEP 3::PAGINATE to fit into pageSize
		const paginatedMovies = paginate(sortedMovies, currentPage, pageSize);

		if (filteredMovies.length === 0) {
			return (
				<p>
					<b>There are no movies in the database</b>
				</p>
			);
		}
		return (
			<React.Fragment>
				<div className="row">
					<div className="column-left">
						<ListGroup
							items={this.state.genres}
							selectedItem={this.state.selectedGenre}
							onItemSelect={this.handleGenreSelect}
							//Now using defaultprops in Component instead (https://reactjs.org/docs/react-component.html near the end for defaultprops)
							//textProperty="name" //adding this two property props
							//uniqueKeyProperty="_id" // to make the list component more reusable in other apps
						/>
					</div>
					<div className="column-right">
						<p>
							<b>Showing {filteredMovies.length} movies found in database</b>
						</p>
						<MoviesTable
							movies={paginatedMovies}
							sortCriteria={sortCriteria}
							sortOrder={sortOrder}
							onLike={this.handleLike}
							onSort={this.handleSort}
							onDelete={this.handleDelete}
						/>
						{/*Our Pagination component will need to know the following:: */}
						{/*Total Number of Items(ie:the movie count)::which we already have)*/}
						{/*No of items(ie:movies)per page::We should store this in state, cause this can change)*/}
						{/*Finally, Should raise an event when page users clicks on a page button*/}
						<Pagination
							itemCount={filteredMovies.length}
							pageSize={this.state.pageSize}
							currentPage={this.state.currentPage}
							onPageChange={this.handlePageChange}
							onPageChangePrev={this.handlePageChangePrevious}
							onPageChangeNext={this.handlePageChangeNext}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Movies;
