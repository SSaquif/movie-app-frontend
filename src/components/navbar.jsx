import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expang-lg navbar-light bg-light">
				<div className="collapse-navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="">Login</Link>
						</li>
						<li className="nav-item">
							<Link to="">Home</Link>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
