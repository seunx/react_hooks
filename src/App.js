import React, { useContext } from 'react';
import Counter from './components/Counter';
import Form from './components/Form';
import Posts from './components/Posts';
import { Store } from './context';

const App = () => {
	const { state, dispatch } = useContext(Store);
	const _handleChange = e => {
		dispatch({ type: 'color', payload: e.target.value });
	};

	return (
		<div>
			<label htmlFor="select">
				Theme Changer:{' '}
				<select name="Color" onChange={_handleChange} onBlur={_handleChange}>
					<option value="red">Red</option>
					<option value="orange">Orange</option>
					<option value="green">Green</option>
				</select>
			</label>
			<h2 style={{ color: state.themeColor }}>Hooks Counter</h2>
			<Counter />
			<h2 style={{ color: state.themeColor }}>Form Created using Hooks</h2>
			<Form />
			<h2 style={{ color: state.themeColor }}>API call using Hooks</h2>
			<Posts />
		</div>
	);
};

export default App;
