import React, { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<h1>Counter: {counter}</h1>
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
