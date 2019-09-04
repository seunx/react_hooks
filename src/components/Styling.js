import React from 'react';
import { Global } from '@emotion/core';
import { greenHeading, globalStyle } from '../styles/index';

const Styling = () => {
	return (
		<div>
			<Global styles={globalStyle} />
			<div css={greenHeading}>
				<h2>Emotion CSS</h2> <br />
			</div>
		</div>
	);
};

export default Styling;
