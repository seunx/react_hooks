import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
	const [pics, setPics] = useState([]);
	useEffect(() => {
		axios
			.get('http://jsonplaceholder.typicode.com/photos/?_limit=5')
			.then(res => {
				setPics(res.data);
			});
	}, []);
	return (
		<div>
			<h3>Returns Stuff from json PlaceHolder</h3>
			{pics.map(pic => (
				<div key={pic.id}>
					<p>{pic.title}</p>
					<img src={pic.thumbnailUrl} alt={pic.title} />
				</div>
			))}
		</div>
	);
};

export default Posts;
