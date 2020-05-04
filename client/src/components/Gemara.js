import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';
import Pages from './Pages';
const Gemara = ({ type }) => {
	const [ isOpen, setIsOpen ] = useState(false);
	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch(addToCart({ type }));
	};
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Box>
			<div>
				<h2>{type}</h2>
			</div>
			<div>
				<button onClick={handleToggle}>open</button>
			</div>
			{isOpen ? (
				<div>
					<div>
						<div />
						<button onClick={handleAdd}>Add</button>
					</div>
				</div>
			) : (
				''
			)}
		</Box>
	);
};

const Box = styled.div`
	display: flex;
	border: 1px solid black;
	margin-bottom: 1rem;
	width: 50%;
`;

export default Gemara;
