const initState = {
	data: [
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
	],
	additems: [],
	total: 0
};

const cartReducer = (state = initState, action) => {
	return state;
};

export default cartReducer;
