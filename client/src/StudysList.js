import React, { useState } from 'react';
import { Study } from './Study';

export const StudyList = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	const data = [
		{
			type: 'gmara',
			masehcet: [
				{
					name: 'shabat',
					page: 'ג עמוד ב'
				},
				{
					name: 'yoma',
					page: 'ה עמוד ב'
				}
			]
		},
		{
			type: 'misna',
			masehcet: [
				{
					name: 'shabat',
					perek: 'ג'
				},
				{
					name: 'yoma',
					perek: 'ה'
				}
			]
		}
		// {
		// 	type: 'tanach',
		// 	sefer: [
		// 		{
		// 			name: 'bereshit',
		// 			perek: 'ג'
		// 		},
		// 		{
		// 			name: 'shmot',
		// 			perek: 'ה'
		// 		}
		// 	]
		// }
	];

	const toggle = () => {
		setIsOpen(!isOpen);

		// !isOpen ? setMark('-') : setMark('+');
	};
	const handleClick = (e, index) => {
		{
			data[index].masehcet.map((content, i) => <div key={i}>{content.name}</div>);
			console.log(data[index].masehcet[0].name);
		}
	};
	return (
		<div>
			{data.map((item, index) => (
				<div key={index}>
					<button onClick={toggle}>{item.type}</button>
				</div>
			))}
			{isOpen ? <div>xxcx</div> : <div>sdsd</div>}
		</div>
	);
};
// {data.map((item, index) => <Study type={item.type} key={index} />)}
