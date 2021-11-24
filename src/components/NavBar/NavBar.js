import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
			<div className="container">
				<Link to="/" className="fs-3 fw-bold ubuntu navbar-brand">
					Rick & Morty <span className="text-primary ">wiKi</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink activeClassName="active" to="/" className="nav-link">
								Characters
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/episodes" className="nav-link">
								Episodes
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/locations" className="nav-link">
								Locations
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
