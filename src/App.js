import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/loginForm';
import Movies from './components/movies';
import Navbar from './components/navbar';
import MovieForm from './components/movieForm';
import NotFound from './components/common/notFound';
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<main className="container">
					<Switch>
						<Route path="/login" component={LoginForm} />
						<Route path="/movies/:id" component={MovieForm} />
						<Route path="/movies" component={Movies} />
						<Route path="/not-found" component={NotFound} />
						<Redirect exact from="/" to="/movies" />
						<Redirect to="/not-found" /> {/*For invalid URLs*/}
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
