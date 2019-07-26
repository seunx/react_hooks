// Code from reactjs.org/docs/error-boundaries.html
// This is a 404 Page that will catch errors with pages and redirect to the home page

import React from 'react';

class ErrorBoundary extends React.Component {
	state = { hasError: false, redirect: false };
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	componentDidCatch(error, info) {
		console.error('ErrorBoundary aught and error', error, info);
	}
	componentDidUpdate() {
		if (this.state.hasError) {
			setTimeout(() => this.setState({ redirect: true }), 5000);
			//setTimeout(() => navigate('/'), 5000); comes from @reach/router
		}
	}
	render() {
		if (this.state.redirect) {
			//return <Redirect to="/" /> requires a @reach/router to work
		}
		if (this.state.hasError) {
			return (
				<div>
					<h1>There was an error with this page. Click Here to go back home</h1>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

/**
 * To use this you need to wrap it around the component you wish to catch errors on.
 *
 * export default wrappedComponent(props){
 *  return (
 *      <ErrorBoundary>
 *          <Component {...props } />
 *      <ErrorBoundary />
 *  );
 * }
 */
