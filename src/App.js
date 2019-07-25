import React from 'react';
import Counter from './components/Counter';
import Form from './components/Form';

const App = () => {
	return (
		<div>
			<h2>Hooks Counter</h2>
			<Counter />
			<h2>Form Created using Hooks</h2>
			<Form />
		</div>
	);
};

export default App;
