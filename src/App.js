import React from 'react';
import Counter from './components/Counter';
import Form from './components/Form';
import Posts from './components/Posts';

const App = () => {
	return (
		<div>
			<h2>Hooks Counter</h2>
			<Counter />
			<h2>Form Created using Hooks</h2>
			<Form />
			<h2>API call using Hooks</h2>
			<Posts />
		</div>
	);
};

export default App;
