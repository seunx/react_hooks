import React, { useState } from 'react';

const Form = () => {
	const [info, updateInfo] = useState({
		userName: '',
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});
	const _handleChange = e => {
		const { name, value } = e.target;
		updateInfo({ ...info, [name]: value });
	};

	const _handleSubmit = e => {
		e.preventDefault();
		console.log(info);
	};

	return (
		<form onSubmit={_handleSubmit}>
			<label htmlFor="userName">
				<input
					onChange={_handleChange}
					name="userName"
					type="text"
					placeholder="Username"
					value={info.userName}
				/>
			</label>
			<label htmlFor="firstName">
				<input
					onChange={_handleChange}
					name="firstName"
					type="text"
					placeholder="First Name"
					value={info.firstName}
				/>
			</label>
			<label htmlFor="lastName">
				<input
					onChange={_handleChange}
					name="lastName"
					type="text"
					placeholder="Last Name"
					value={info.lastName}
				/>
			</label>
			<label htmlFor="email">
				<input
					onChange={_handleChange}
					name="email"
					type="email"
					placeholder="Email"
					value={info.email}
				/>
			</label>
			<label htmlFor="password">
				<input
					onChange={_handleChange}
					name="password"
					type="password"
					placeholder="Password"
					value={info.password}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
