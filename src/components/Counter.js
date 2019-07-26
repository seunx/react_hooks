import React, { useContext } from 'react';
import { Store } from '../context';

const Counter = () => {
	const { state, dispatch } = useContext(Store);
	return (
		<div>
			<h3>Counter: {state.counter}</h3>
			<div className="btn-container">
				<button onClick={() => dispatch({ type: 'decrement' })}> -1</button>
				<button onClick={() => dispatch({ type: 'increment' })}> +1</button>
				<button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
			</div>
		</div>
	);
};

export default Counter;
