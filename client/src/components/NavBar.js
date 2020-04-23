import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Cart from '../Cart';
const NavBar = () => {
	return (
		<Router>
			<div>
				<Link to="/">Home</Link>
				<Link to="/cart">Cart</Link>

				<Switch>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default NavBar;
