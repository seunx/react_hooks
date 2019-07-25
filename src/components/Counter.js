import React, { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<h3>Counter: {counter}</h3>
			<div className="btn-container">
				<button onClick={() => setCounter(counter - 2)}> -2 </button>
				<button onClick={() => setCounter(counter - 1)}> -1 </button>
				<button onClick={() => setCounter(counter + 1)}> +1 </button>
				<button onClick={() => setCounter(counter + 2)}> +2 </button>
			</div>
		</div>
	);
};

export default Counter;
