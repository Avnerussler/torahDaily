import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import StudysList from './StudysList';
export const Study = (props) => {
	const [ cart, setCart ] = useContext(CartContext);

	const addToCart = () => {
		const typeOfStudy = { type: props.type, masehcet: props.masehcet };
		setCart((curr) => [ ...curr, typeOfStudy ]);
	};
	return (
		<div>
			<div>{props.type}</div>

			<button onClick={addToCart}>Add</button>
		</div>
	);
};
// <div>{props.masehcet}</div>
