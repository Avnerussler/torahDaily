import * as types from '../constants/ActionTypes';
import { studyList } from '../studyList';

export const cartReducer = (state = [], action) => {
	switch (action.type) {
		case types.ADD_TO_CART:
			return [ ...state, action.payload ];

		default:
			return state;
	}
};
