/** @format */
import styled from 'styled-components';
const Photo = require('../assets/michael.jpg');

const Title = styled.div`
	padding: 6rem;
	margin-top: -8rem;
	h1 {
		font-size: 60px;
		margin: 0;
	}
	h3 {
		font-size: 35px;
		margin: 0;
	}
	@media only screen and (max-width: 900px) {
		margin-top: 0rem;
		padding: 4em 0rem 0rem;
		height: 40vh;
		h1 {
			font-size: 30px;
		}
		h3 {
			font-size: 20px;
		}
	}
`;

const Main = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	@media only screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

const ImageContainer = styled.div`
	background-image: url(${Photo});
	background-size: cover;
	background-repeat: no-repeat, repeat;
	background-position: 50% 20%;
	height: 100vh;
	width: 60%;
	@media only screen and (max-width: 900px) {
		height: 60vh;
		width: 100%;
	}
`;

function Home() {
	return (
		<Main>
			<ImageContainer />
			<Title>
				<h1>Michael Bonini</h1>
				<h3>Mechanical Engineer</h3>
			</Title>
		</Main>
	);
}

export default Home;
