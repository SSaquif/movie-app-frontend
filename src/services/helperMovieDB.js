import * as genresAPI from './helperGenreDB';

const movies = [
	{
		_id: '5b21ca3eeb7f6fbccd471815',
		title: 'Wonder Woman',
		genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
		numberInStock: 6,
		dailyRentalRate: 2.5,
		publishDate: '2018-01-03T19:04:28.809Z',
		liked: true
	},
	{
		_id: '5b21ca3eeb7f6fbccd471816',
		title: 'John Wick',
		genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
		numberInStock: 5,
		dailyRentalRate: 2.5,
		liked: true
	},
	{
		_id: '5b21ca3eeb7f6fbccd471817',
		title: 'Silence of the Lambs',
		genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
		numberInStock: 8,
		dailyRentalRate: 3.5,
		liked: false
	},
	{
		_id: '5b21ca3eeb7f6fbccd471819',
		title: 'Deadpool',
		genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
		numberInStock: 7,
		dailyRentalRate: 3.5,
		liked: false
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181b',
		title: 'Titanic',
		genre: { _id: '5b21ca3eeb7f6fbccd471826', name: 'Romance' },
		numberInStock: 7,
		dailyRentalRate: 3.5,
		liked: true
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181a',
		title: 'Tropic Thunder',
		genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
		numberInStock: 7,
		dailyRentalRate: 3.5,
		liked: false
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181e',
		title: 'Drive',
		genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
		numberInStock: 7,
		dailyRentalRate: 4.5,
		liked: false
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181f',
		title: 'Gone Girl',
		genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
		numberInStock: 4,
		dailyRentalRate: 3.5,
		liked: true
	},
	{
		_id: '5b21ca3eeb7f6fbccd471821',
		title: 'The Avengers',
		genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
		numberInStock: 7,
		dailyRentalRate: 3.5,
		liked: false
	}
];

export function getMovies() {
	return movies;
}

export function getMovie(id) {
	return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
	let movieInDb = movies.find((m) => m._id === movie._id) || {};
	movieInDb.name = movie.name;
	movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
	movieInDb.numberInStock = movie.numberInStock;
	movieInDb.dailyRentalRate = movie.dailyRentalRate;

	if (!movieInDb._id) {
		movieInDb._id = Date.now();
		movies.push(movieInDb);
	}

	return movieInDb;
}

export function deleteMovie(id) {
	let movieInDb = movies.find((m) => m._id === id);
	movies.splice(movies.indexOf(movieInDb), 1);
	return movieInDb;
}
