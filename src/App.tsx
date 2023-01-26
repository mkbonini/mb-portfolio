/** @format */
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About'
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
	/* max-height: 100vh; */
	/* overflow: hidden; */
	background-color: #050C27;
	color: white;

	hr {
		color: #916FF0;
		background-color: #916FF0;
		height: 1px;
		width: 115px;
		margin-top: 10vh
	}
`;
function App() {
	return (
		<AppContainer>
			<Navbar />
			<Welcome />
			<hr />
			<About />
			<hr />
			<Projects />
			<hr />
			<Resume />
			<hr />
			<Contact />
			<Footer />
		</AppContainer>
	);
}

export default App;
