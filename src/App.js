import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import Movies from './components/movies';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<main className="container">
					<Switch>
						<Route path="/login" component={LoginForm} />
						<Route path="/" exact component={Movies} />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
