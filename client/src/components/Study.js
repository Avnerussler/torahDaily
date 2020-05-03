import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';

const Study = ({ type, name, page, perek }) => {
	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch(addToCart());
	};
	return (
		<Box>
			<div>
				<h2>{type}</h2>
			</div>
			<div>
				<h3>{name}</h3>
				<p>{page}</p>
				<p>{perek}</p>
			</div>
			<div>
				<button onClick={handleAdd}>Add</button>
			</div>
		</Box>
	);
};

const Box = styled.div`
	display: flex;
	border: 1px solid black;
	margin-bottom: 1rem;
`;

export default Study;
