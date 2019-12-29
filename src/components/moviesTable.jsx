import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';

//For example, hence
//This is a valid react element and react elements are just regularjavascript objects
const reactElem = <p></p>;

class MoviesTable extends Component {
	//Setting my columns in an Array to be passed as props
	//columnKey value should correspond to key names in our data/row(ie movies) object
	columns = [
		{ columnHeader: 'Title', columnKey: 'title' },
		{ columnHeader: 'Genre', columnKey: 'genre.name' },
		{ columnHeader: 'Stock', columnKey: 'numberInStock' },
		{ columnHeader: 'Daily Rate', columnKey: 'dailyRentalRate' },
		{
			key: 'like',
			content: (movie) => (
				<Like
					liked={movie.liked}
					//onClick={() => this.handleLike(movie)} //now gotten via props
					onClick={() => this.props.onLike(movie)}
				/>
			)
		}, //content is reactelem = regular JS object
		{
			key: 'delete',
			//content is function that takes one element
			//and returns a react element===JS object
			content: (movie) => (
				<button
					className="btn btn-danger btn-sm"
					onClick={() => this.props.onDelete(movie)}
				>
					Delete
				</button>
			)
		}
	];
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

		return (
			<React.Fragment>
				<table className="table">
					<Table
						rows={movies}
						columns={this.columns}
						sortOrder={sortOrder}
						onSort={onSort}
					/>
				</table>
			</React.Fragment>
		);
	}
}

//Converted SFC to CC
//const MoviesTable = (props) => {};

export default MoviesTable;
