import React from 'react';

const NavBar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a href="/" className="navbar-brand">React Stores</a>
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cart</button>
		</nav>
	);
}

export default NavBar;