import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';
import Movies from './components/movies';
import './App.css';
import Navbar from './components/navbar';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<main className="container">
					<Movies />
				</main>
			</React.Fragment>
		);
	}
}

export default App;
