import * as types from '../constants/ActionTypes';

export const addToCart = (payload) => {
	return {
		type: types.ADD_TO_CART,
		payload
	};
};

const removeFromCart = () => {
	return {
		type: types.REMOVE_FROM_CART
	};
};
const checkOut = () => {
	return {
		type: types.CHECKOUT
	};
};
