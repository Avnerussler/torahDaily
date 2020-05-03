import * as types from '../constants/ActionTypes';
import { studyList } from '../studyList';

export const cartReducer = (state = studyList, action) => {
	switch (action.type) {
		case types.ADD_TO_CART:
			return state;

		default:
			return state;
	}
};
