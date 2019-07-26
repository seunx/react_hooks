import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { StoreProvider } from './context';

const WrappedApp = () => {
	return (
		<StoreProvider>
			<App />
		</StoreProvider>
	);
};

render(<WrappedApp />, document.getElementById('root'));
