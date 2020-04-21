import React, { useState, useEffect } from 'react';

import './App.css';
import { IoMdCart } from 'react-icons/io';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';
import { StudyList } from './StudysList';
const App = () => {
	const [ isOpen, setIsOpen ] = useState('');
	const [ mark, setMark ] = useState('+');
	const [ cart, setCart ] = useState({});

	const toggle = () => {
		setIsOpen(!isOpen);

		!isOpen ? setMark('-') : setMark('+');
	};
	// const handleChange = (e, index) => {
	// 	let d = [ ...data ];

	// 	d[index].taken = !d[index].taken;
	// 	setData(d);

	// 	// console.log(data);
	// };
	// const handleClick = (e, index) => {
	// 	let d = [ ...data ];

	// 	d[index].taken = !d[index].taken;
	// 	setData(d);
	// 	setCart(data);
	// 	// data[index].taken = true ? console.log('as') : '';
	// 	console.log(cart);
	// };

	return (
		<CartProvider>
			<div>dfdf</div>
			<Cart />
			<StudyList />
		</CartProvider>
	);
};

export default App;

// {isOpen ? : ''}
