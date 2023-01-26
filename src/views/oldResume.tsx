/** @format */

import styled from 'styled-components';
const PDF = require('../assets/resume.pdf');

const Main = styled.div`
	background-color: #282c34;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	height: 100vh;
	iframe {
		margin-top: -60px;
	}
`;

function Resume() {
	return (
		<Main>
			<iframe
				title='mikes-resume'
				src={PDF}
				width='70%'
				height='85%'
			></iframe>
		</Main>
	);
}

export default Resume;
