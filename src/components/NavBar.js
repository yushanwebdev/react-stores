import React from 'react';

const NavBar = (props) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a href="/" className="navbar-brand">React Stores</a>
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => props.show()}>Cart {(props.cart.length)}</button>
		</nav>
	);
}

export default NavBar;