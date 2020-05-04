import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';

const Page = ({ item: { type, masecht, name, page } }) => {
	const [ isOpen, setIsOpen ] = useState(false);
	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch(addToCart({ type, masecht, name, page }));
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
						<div>
							<h3>{masecht}</h3>
						</div>
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

export default Page;
