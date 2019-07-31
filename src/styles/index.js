import { css, keyframes } from '@emotion/core';

const bounce = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -30px, 0);
}

70% {
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0,-4px,0);
}
`;

export const greenHeading = css`
	@import url('https://fonts.googleapis.com/css?family=Lacquer&display=swap');

	color: green;
	margin: 1rem 0 0 0;

	h2 {
		text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
		font-family: 'Lacquer', sans-serif;
		border-bottom: 1px solid red;
		display: inline-block;
		&:hover {
			color: yellow;
			animation: ${bounce} 1s ease-in-out infinite;
		}
	}
`;

export const globalStyle = css`
	* {
		box-sizing: border-box;
		/* margin: 0;
		padding: 0; */
	}
`;
