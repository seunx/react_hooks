import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { Store } from '../context';

// Converted to useContext Store
const Posts = () => {
	const { state, dispatch } = useContext(Store);
	// const [pics, setPics] = useState([]);
	useEffect(() => {
		axios
			.get('http://jsonplaceholder.typicode.com/photos/?_limit=5')
			.then(res => {
				// setPics(res.data);
				dispatch({ type: 'getPosts', payload: res.data });
			});
	}, []);
	return (
		<div>
			<h3>Returns Stuff from json PlaceHolder</h3>
			{state.posts.map(pic => (
				<div key={pic.id}>
					<p>{pic.title}</p>
					<img src={pic.thumbnailUrl} alt={pic.title} />
				</div>
			))}
		</div>
	);
};

export default Posts;
