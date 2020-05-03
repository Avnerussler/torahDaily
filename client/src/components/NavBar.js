import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import { Home } from './Home';

export const NavBar = () => {
	return (
		<Router>
			<Link to="/">Home</Link>
			<Link>Cart</Link>

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};
