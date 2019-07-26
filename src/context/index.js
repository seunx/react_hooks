import React, { createContext, useReducer } from 'react';

export const Store = createContext({ state: {}, dispatch: () => {} });

const INITIAL_STATE = {
	error: null,
	counter: 0,
	themeColor: 'red',
	posts: []
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				counter: (state.counter += 1)
			};
		case 'decrement':
			return {
				...state,
				counter: (state.counter -= 1)
			};
		case 'reset':
			return {
				...state,
				counter: (state.counter = 0)
			};
		case 'color':
			return {
				...state,
				themeColor: action.payload
			};
		case 'getPosts':
			return {
				...state,
				posts: action.payload
			};
		default:
			throw new Error('not a valid action');
	}
};

export function StoreProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{children}</Store.Provider>;
}
