import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Cart = () => {
	const [ cart, setCart ] = useContext(CartContext);

	return (
		<div>
			<span>item in cart:{cart.length}</span>
			<br />
			<span>total studis type:{'cart'}</span>
		</div>
	);
};
