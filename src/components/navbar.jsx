import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-Brand" to="/">
					MovieApp
				</Link>
				<div className="navbar-nav">
					<NavLink className="nav-item nav-link nav-item" to="/login">
						Login
					</NavLink>
					<NavLink className="nav-item nav-link" to="/movies">
						Movies
					</NavLink>
					<NavLink className="nav-item nav-link" to="/not-found">
						Customers
					</NavLink>

					<NavLink className="nav-item nav-link" to="/not-Found">
						Rentals
					</NavLink>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
